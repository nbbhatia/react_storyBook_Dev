import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/input";
import TypographyComponent from "../TypographyComponent/typography";
import Center from "../Center/center";

export default {
  title: "Component/LoginForm",
  decorators: [(story) => <Center>{story()}</Center>],
};

export const PrimarySubscription = () => {
  const [UserName, setUserName] = useState();
  const [Pwd, setPwd] = useState();
  return (
    <div style={{ border: "4px solid black", padding: 16 }}>
      <TypographyComponent varianttype="h4" children="Login Form" />
      <div style={{ margin: 16 }}>
        <Input
          size="medium"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          size="medium"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
        typeOfVariant="contained" variant="primary"
          onClick={() =>
            console.log(`UserName is ${UserName} and Password is ${Pwd}`)
          }
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
