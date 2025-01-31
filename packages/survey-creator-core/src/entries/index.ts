export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../creator-base";

export * from "../components/tabs/embed";
export * from "../components/tabs/json-editor-ace";
export * from "../components/tabs/json-editor-textarea";
export * from "../components/tabs/json-editor-plugin";
export * from "../components/tabs/designer";
export * from "../components/tabs/test";
export * from "../components/tabs/logic";
export * from "../components/tabs/logic-ui";
export * from "../components/tabs/translation";

export * from "../components/page-navigator/page-navigator";
export * from "../components/page";
export * from "../components/question";
export * from "../components/item-value";
export * from "../components/simulator";
export * from "../components/results";
export * from "../editorLocalization";
export * from "../json5";
export * from "../property-grid";
export * from "../property-grid/condition";
export * from "../property-grid/matrices";
export * from "../property-grid/property-grid-view-model";
//export * from "../property-grid/modal-action";
export * from "../property-grid/restfull";
export * from "../property-grid/values";
export * from "../questionconverter";
export * from "../svgbundle";
export * from "../textWorker";
export * from "../toolbox";
export * from "../utils/utils";
export * from "../utils/events";
export { creatorCss } from "../survey-theme/creator-css";

import "../components/tabbed-menu/tabbed-menu.scss";
import "../components/tabbed-menu/tabbed-menu-item.scss";
import "../components/property-panel/property-panel.scss";
import "../components/property-panel/property-panel-item.scss";
import "../components/toolbox/toolbox.scss";
import "../components/toolbox/toolbox-item.scss";
import "../components/button.scss";
import "../survey-theme/survey.scss";
import "../utils/design.scss";
import "../utils/layout.scss";

import { settings } from "survey-core";
settings.supportCreatorV2 = true;