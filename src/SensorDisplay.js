import React from "react";
import GoodTemplate from "./GoodTemplate";
import WarningTemplate from "./WarningTemplate";
import DangerTemplate from "./DangerTemplate";

export default SensorDisplay = ({
  current,
  convention,
  threshold,
  deviceName,
  goodMessage,
  warningMessage,
  dangerMessage
}) => {
  let template;

  if(current <= threshold.danger) {
    template = <DangerTemplate {...{
      deviceName,
      dangerMessage,
      convention,
      current}}
    />
  } else if(current <= threshold.warning && current > threshold.danger) {
    template = <WarningTemplate {...{
      deviceName,
      warningMessage,
      convention,
      current}}
    />
  } else {
    template = <GoodTemplate {...{
      deviceName,
      goodMessage,
      convention,
      current
    }}/>
  }

  return template;
}