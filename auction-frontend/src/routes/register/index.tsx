import {
    createFileRoute,
    Link,
    redirect,
    useNavigate,
} from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { register } from "@/lib/auth";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/register/")({
    beforeLoad: () => {
        if (localStorage.getItem("token")) throw redirect({ to: "/profile" });
    },
    component: RouteComponent,
});

function RouteComponent() {
    const { t } = useTranslation();
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        const registerResponse = await register(username, password);
        if (registerResponse.success) {
            localStorage.setItem("token", registerResponse.message);
            toast.success(t("auth.toast.register.success"));
            nav({ to: "/profile" });
        } else {
            toast.error(t("auth.toast.register.error"));
        }
    };

    return (
        <>
            <div className="grid flex-1 place-items-center">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-center text-xl">
                            {t("auth.register")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">
                                        {t("auth.username")}
                                    </Label>
                                    <Input
                                        id="username"
                                        type="username"
                                        minLength={1}
                                        required
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">
                                            {t("auth.password")}
                                        </Label>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        minLength={1}
                                        required
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Button
                            type="submit"
                            className="w-full"
                            onClick={handleRegister}
                        >
                            {t("auth.register")}
                        </Button>
                        <Link
                            to="/login"
                            className="text-left text-zinc-500 italic underline"
                        >
                            {t("auth.already_registered")}
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
