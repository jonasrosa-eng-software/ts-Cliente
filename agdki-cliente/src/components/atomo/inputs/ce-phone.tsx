import { CEInputBase, type ICETextProps } from "./ce-input-base";

const CEPhone = (props: ICETextProps) => {
  return <CEInputBase {...props} icon="solar:phone-outline" type="tel" />;
};

export { CEPhone };
