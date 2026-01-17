import { FieldError, InputGroup, Label, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

export type ICETextProps = {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  value: string;
  requered?: boolean;
  disabled?: boolean;
  onSetValue: (value: string) => void;
  type?: "search" | "text" | "url" | "tel" | "email" | "password";
  icon?: string;
};

const CEInputBase = (props: ICETextProps) => {
  const {
    label,
    errorMessage,
    onSetValue,
    placeholder,
    type = "text",
    value,
    icon,
  } = props;
  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    if (errorMessage && errorMessage > "") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [errorMessage]);

  return (
    <TextField className="w-full" isInvalid={isInvalid} type={type}>
      <Label>{label}</Label>
      <InputGroup className={" border-2"} color="pink">
        <InputGroup.Input
          value={value}
          className="w-full max-w-[280px]"
          placeholder={placeholder}
          onVolumeChange={(e) => {
            onSetValue(e.currentTarget.value);
          }}
        />
        {icon && icon > "" && (
          <InputGroup.Suffix>
            <Icon width={25} icon={icon} className="text-pink-500" />
          </InputGroup.Suffix>
        )}
      </InputGroup>
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  );
};

export { CEInputBase };
