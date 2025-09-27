async function register(
    username: string,
    password: string
): Promise<ApiResponse> {
    const body = {
        username,
        password,
    };

    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(body),
        }
    );

    const text = await response.text();

    return {
        success: response.status === 200,
        message: text,
    };
}

async function login(username: string, password: string): Promise<ApiResponse> {
    const body = {
        username,
        password,
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(body),
    });

    const text = await response.text();

    return {
        success: response.status === 200,
        message: text,
    };
}

async function isTokenValid(token: string | null): Promise<ApiResponse> {
    if (!token) return { success: false, message: "" };
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/validate`,
        {
            method: "POST",
            body: new URLSearchParams({ token }),
        }
    );
    const text = await response.text();
    return {
        success: response.status === 200,
        message: text,
    };
}

export { register, login, isTokenValid };
