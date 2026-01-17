import { CEInputBase, type ICETextProps } from "./ce-input-base";

const CEEmail = (props: ICETextProps) => {
  return <CEInputBase {...props} icon="solar:letter-outline" type="email" />;
};

export { CEEmail };
