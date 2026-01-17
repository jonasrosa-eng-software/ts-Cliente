import { Button, Fieldset, Form, Link } from "@heroui/react";
import { useEffect, useState } from "react";
import { CEPhone } from "../../components/atomo/inputs/ce-phone";
import { CEName } from "../../components/atomo/inputs/ce-nome-pes";
import { CEEmail } from "../../components/atomo/inputs/ce-email";

interface ILoginProps {
  userRolekey: string;
}

const Login = (props: ILoginProps) => {
  const { userRolekey } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log(userRolekey);
    setMounted(true);
  }, [userRolekey]);

  return (
    <div className="flex   items-center justify-center w-full h-full bg-white ">
      {mounted ? (
        // <div className="rounded-large bg-content1 shadow-small flex flex-col gap-4 px-8 pt-6 pb-10 ">
        <Form
          className="flex flex-col gap-2 items-center  w-full max-w-[460px] bg-gray-100 p-4 "
          validationBehavior="native"
        >
          <div className="flex flex-col gap-1 pl-8 mb-2 w-full">
            <h1 className="text-lg font-medium">{"Cadastre-se agora"}</h1>
            <p className="text-sm text-default-500">{"Tudo em um só lugar."}</p>
          </div>
          <Fieldset>
            <CEName
              label="Nome"
              onSetValue={() => {}}
              placeholder="Informe nome completo"
              value=""
              disabled
              errorMessage=""
            />
            <CEEmail
              label="E-mail"
              onSetValue={() => {}}
              placeholder="Informe e-mail valido"
              value=""
              disabled
              errorMessage=""
            />
            <CEPhone
              label="Telefone"
              onSetValue={() => {}}
              placeholder="Informe telefone com DDD"
              value=""
              disabled
              errorMessage=""
            />
            <Button
              className="w-full "
              onPress={() => {
                //   handleSubmit();
              }}
            >
              Cadastrar
            </Button>
          </Fieldset>

          <div className="flex items-center gap-4 py-2">
            <p className="text-tiny text-default-500 shrink-0">Ou</p>
          </div>
          <p className="text-sm text-center">
            Já tenho conta? &nbsp;
            <Link href={`/$/sign-in`}>Entrar</Link>
          </p>
          <p className="text-sm text-center">
            Voltar ao &nbsp;
            <Link href="/">Início</Link>
          </p>
        </Form>
      ) : (
        <div>oi</div>
      )}
    </div>
  );
};

export { Login };
