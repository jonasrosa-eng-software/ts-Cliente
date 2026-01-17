import { CEInputBase, type ICETextProps } from "./ce-input-base";

const CEName = (props: ICETextProps) => {
  return <CEInputBase {...props} icon="solar:user-circle-outline" />;
};

export { CEName };
