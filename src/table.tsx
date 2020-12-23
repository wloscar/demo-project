/**
 * @flie 开放组件入口文件
 */
import * as React from "react";
import { Interfaces } from "bi-open-react-sdk";
import Table from "rc-table";

interface IColumnItem {
  dataIndex: string;
  title: string;
  width?: number;
}

// 绑定原生dom事件
function useEventListener(
  element: HTMLElement,
  eventName: string,
  handler: (e: any) => void,
  options?: {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
  }
) {
  const savedHandler = React.useRef(null);
  const { capture, passive, once } = options ?? {};

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return;
    }

    const eventListener = (event: any) => savedHandler.current(event);
    const opts = { capture, passive, once };
    element.addEventListener(eventName, eventListener, opts);

    return () => {
      element.removeEventListener(eventName, eventListener, opts);
    };
  }, [eventName, element, capture, passive, once]);
}

// 可拖动表头
const TitleRender: React.FC<any> = React.memo((props) => {
  const { children, column, onResize, ...restProps } = props;
  const ref = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const [xStart, setXStart] = React.useState(0);
  const [offset, setOffset] = React.useState(0);

  const handleDragStart = React.useCallback((e: any) => {
    e.stopPropagation();
    setDragging(true);
    setXStart(e.clientX);
  }, []);

  const handleDrag = React.useCallback(
    (e: any) => {
      e.stopPropagation();
      const diff = e.clientX - xStart + (ref.current?.offsetWidth ?? 0);
      if (diff > 0) {
        setOffset(diff);
      }
    },
    [xStart, ref.current?.offsetWidth]
  );

  const handleDragEnd = React.useCallback(
    (e: any) => {
      e.stopPropagation();
      // e.nativeEvent.stopImmediatePropagation();
      setDragging(false);
      if (typeof onResize === "function") {
        onResize(column, e.clientX - xStart + (ref.current?.offsetWidth ?? 0));
      }
    },
    [xStart, column, onResize, ref.current?.offsetWidth]
  );

  const dragRef = React.useRef(null);

  useEventListener(dragRef.current, "dragstart", handleDragStart);
  useEventListener(dragRef.current, "drag", handleDrag);
  useEventListener(dragRef.current, "dragend", handleDragEnd);

  return (
    <th {...restProps} ref={ref}>
      {dragging && <div className="resize-edge"></div>}
      <div className="test-table-head-wrap">
        {children}
        <span ref={dragRef} draggable={true} className="resize-handler" />
      </div>
      {dragging && (
        <div
          className="resize-edge"
          style={{
            left: offset,
          }}
        ></div>
      )}
    </th>
  );
});

// 表格
const BITable: React.FC<Interfaces.BIComponentProps> = React.memo((props) => {
  const dataConfig: any = props.dataConfig;
  const viewConfig: any = props.viewConfig;

  // 原始列
  const rawColumns: IColumnItem[] = React.useMemo(
    () =>
      (dataConfig ?? [])
        .filter((each: any) => ["column", "row"].includes(each.areaType))
        .reduce((prev: any[], curr: any) => {
          return [...prev, ...(curr.fields ?? [])];
        }, [])
        .map((each: any) => ({
          title: each.fieldName,
          dataIndex: each.fieldId,
        })),
    [dataConfig]
  );

  const rootElem = React.useRef<HTMLDivElement>(null);

  // 计算表格高度
  const [height, setHeight] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setHeight((rootElem.current?.offsetHeight ?? 0) - 40);
    }, 0);
  }, [rootElem.current?.offsetHeight]);

  // 全部列
  let allColumns: IColumnItem[] = React.useMemo(
    () =>
      rawColumns.map((each) => ({
        ...each,
        width: 140,
        onHeaderCell: (column: any) => ({
          column,
        }),
      })),
    [rawColumns]
  );

  const [columns, setColumns] = React.useState(allColumns);
  React.useEffect(() => {
    setColumns(allColumns);
  }, [allColumns]);

  const width = columns.reduce(
    (prev: number, curr: any) => prev + (curr.width ?? 0),
    0
  );

  const handleResize = React.useCallback(
    (column, newWidth) => {
      setColumns(
        columns.map((each) => ({
          ...each,
          width: each.dataIndex === column.dataIndex ? newWidth : each.width,
        }))
      );
    },
    [columns]
  );

  const ResizableTitle = React.useCallback(
    (props) => <TitleRender {...props} onResize={handleResize} />,
    [handleResize]
  );

  // 原始数据
  const rawData = React.useMemo(
    () =>
      (props.data ?? []).map((each: any = []) => {
        return each.reduce(
          (prev: object, curr: any) => ({
            ...prev,
            [curr.fieldId]: curr.value,
          }),
          {}
        );
      }),
    [props?.data]
  );

  return (
    <div
      className={`test-table ${
        viewConfig?.chartprop?.theme === "black" ? "black" : ""
      }`}
      style={{
        width: "100%",
        height: "100%",
      }}
      ref={rootElem}
    >
      <Table
        columns={columns}
        components={{
          header: {
            cell: ResizableTitle,
          },
        }}
        scroll={{
          x: width,
          y: height,
        }}
        data={rawData}
      />
    </div>
  );
});

export default BITable;
