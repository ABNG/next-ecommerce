import React from "react";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type Props = {
  loading: boolean;
  buttonName: string;
};

const SubmitButton = ({ loading, buttonName }: Props) => {
  return (
    <div className="flex justify-center">
      <Button type="submit" disabled={loading}>
        {loading ? (
          <>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          `Sign ${buttonName}`
        )}
      </Button>
    </div>
  );
};

export default SubmitButton;
