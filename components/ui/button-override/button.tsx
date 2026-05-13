import { endpointWriteToDisk } from "next/dist/build/swc/generated-native"
import { Button } from "../button"

type OverrideButtonProps = React.ComponentProps<typeof Button> & {
  trucbidule: number;
};

function OverrideButton({ children, className, trucbidule, ...props}: OverrideButtonProps) {
    return (
        <div>
            {trucbidule > 0 ? (<Button 
                className={`hover:bg-red-500 transition-all duration-500 cursor-pointer ${className ?? ""}`}
                {...props}
            >
                {children}
            </Button>) : (
                <Button 
                className={`hover:bg-blue-500 transition-all duration-500 cursor-pointer ${className ?? ""}`}
            >
                {children}
            </Button>
            )}
        </div>
    )
}

export {OverrideButton}