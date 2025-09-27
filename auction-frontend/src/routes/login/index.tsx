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
import { login } from "@/lib/auth";
import { toast } from "sonner";

export const Route = createFileRoute("/login/")({
    beforeLoad: () => {
        if (localStorage.getItem("token")) throw redirect({ to: "/profile" });
    },
    component: RouteComponent,
});

function RouteComponent() {
    const nav = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const loginResponse = await login(username, password);
        if (loginResponse.success) {
            localStorage.setItem("token", loginResponse.message);
            toast.success("Successfully logged in");
            nav({ to: "/profile" });
        } else {
            toast.error(loginResponse.message);
        }
    };

    return (
        <>
            <div className="grid flex-1 place-items-center">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-center text-xl">
                            Login
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Username</Label>
                                    <Input
                                        id="username"
                                        type="username"
                                        required
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
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
                        <Button className="w-full" onClick={handleLogin}>
                            Login
                        </Button>
                        <Link
                            to="/register"
                            className="text-left text-zinc-500 italic underline"
                        >
                            Don't have an account? Register here
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
