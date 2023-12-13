import axios from "axios";

function Login() {
    const RESTAPI_KEY = "";

    const redirectURI = "http://localhost:5173/oauth";

    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${RESTAPI_KEY}&redirect_uri=${redirectURI}&response_type=code`;

    const handleLogin = () => {
        window.location.href = kakaoURL;
    };

    const code = new URL(window.location.href).searchParams.get("code");

    return (
        <>
            <button onClick={handleLogin} className="z-20">
                카카오 로그인
            </button>
        </>
    );
}

export default Login;
