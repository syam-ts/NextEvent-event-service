import axios from "axios";

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || "http://auth-service:4000";

export async function verifyToken(token: string) {
    const res = await axios.get(`${AUTH_SERVICE_URL}/api/auth/verify`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    console.log('VERIFY API: ', res, 'data',res.data)

    return res.data;
}
