import { createFileRoute, Link } from "@tanstack/react-router";
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
export const Route = createFileRoute("/register/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="grid flex-1 place-items-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-center text-xl">
                        Register
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Username</Label>
                                <Input id="username" type="username" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Link
                        to="/login"
                        className="text-left text-zinc-500 italic underline"
                    >
                        Already have an account? Login here
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
