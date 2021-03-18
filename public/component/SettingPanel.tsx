import React from 'react';
import { UISchemaLite } from 'ui-schema-lite';
import './SettingPanel.scss';
import 'antd/dist/antd.css';
import 'ui-schema-editors/dist/module/index.css';
import 'ui-schema-lite/dist/module/index.css';
import { editors } from 'ui-schema-editors';

const BIComponentMeta = (window as any).BIComponentMeta.default;

const styleSchema = BIComponentMeta.propsSchema.styleSchema

export const SettingPanel: React.FC = React.memo(props => {
  return (
    <div className="demo-setting-panel-wrapper">
      <UISchemaLite
        editors={editors}
        schema={styleSchema.schema}
      ></UISchemaLite>
    </div>
  );
});
