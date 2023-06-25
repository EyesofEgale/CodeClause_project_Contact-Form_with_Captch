(function () {
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";
    function generateCaptcha() {
        let value = btoa(Math.random() * 1000000000);
        value = value.substr(0, 5 + Math.random() * 5);
        captchaValue = value;
    }
    function setCaptcha() {
        captchaValue.split("").map((char) => {
            const rotate = -20 + Math.trunc(Math.random() * 30);
            const font = Math.trunc(Math.random() * fonts.length);
            return `<span
            style=" 
            transfrom:rotate(${rotate}deg);
            font-family:${font[font]}
            "
            >${char}</span>`;
        }).join("");
        document.querySelector(".login-form .captcha .preview").innerHTML = html;
    }
    function initCaptcha() {
        document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click", function () {
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();
    document.querySelector(".login-form #login-btn").addEventListener("click", function () {
        let initCaptchaValue = document.querySelector(".login-form .captcha-form .captcha-input").value;
        if (initCaptchaValue === captchaValue) {
            swal("", "Logging In!", "success");
        } else {
            swal("Invalid captcha");
        }
    });
}) ();





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }  
        body {
            font-family: 'Times New Roman', Times, serif;
            background: #f5f5f5;
        }
        .login-form {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 450px;
            background: #fff;
            padding: 20px 30px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        }
        
        .login-form .form-title {
            font-family: 'Times New Roman', Times, serif;
            text-align: center;
            font-size: 30px;
            font-weight: 600;
            margin: 20px 0px 30px;
            color: #111;
            box-sizing: content-box;
        }
        
        .login-form .form-input {
            margin: 10px 0px;
        }
        
        .login-form .form-input label,
        .login-form .captcha label {
            display: block;
            font-size: 15px;
            color: #111;
            margin-bottom: 5px;
        }
        
        .login-form .form-input input {
            width: 390px;
            padding: 10px;
            border: 1px solid #888;
            font-size: 15px;
        }
        
        .login-form .captcha {
            margin: 15px 0px;
        }
        
        .login-form .captcha .preview {
            color: #555;
            width: 100%;
            text-align: center;
            height: 40px;
            line-height: 40px;
            letter-spacing: 8px;
            border: 1px solid #888;
            font-family: "monospace";
        }
        
        .login-form .captcha .preview span {
            display: inline-block;
            user-select: none;
        }
        
        .login-form .captcha .captcha-form {
            display: flex;
        }
        
        .login-form .captcha .captcha-form input {
            width: 350px;
            padding: 8px;
            border: 1px solid #888;
    
        }
        .login-form .captcha .captcha-form .captcha-refresh {
            width: 40px;
            border: none;
            outline: none;
            background: #888;
            color: #eee;
            cursor: pointer;
        }
        
        .login-form #login-btn {
            margin-top: 5px;
            width: 390px;
            padding: 10px;
            border: none;
            outline: none;
            font-size: 15px;
            text-transform: uppercase;
            background: #4c81ff;
            color: #fff;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="login-form">
        <div class="form-title">
            ADMIN LOGIN
        </div>
        <div class="form-input">
            <label for="username">USERNAME:-</label>
            <input type="text" id="username">
        </div>
        <div class="form-input">
            <label for="password">PASSWORD:-</label>
            <input type="password" id="password">
        </div>
        <div class="captcha">
            <label for="captcha-input">ENTER CAPTCHA:-</label>
            <div class="preview"></div>
            <div class="captcha-form">
                <input type="text" id="captcha-form" placeholder="Enter captcha text">
                <button class="captcha-refresh">
                    <i class="fas fa-sync-alt"></i>
                </button>
                
                <!--<button class="captcha-refresh">
                    <i class="fa-solid fa-rotate"></i>
                    <i class="fas fa-regular fa-arrows-rotate"></i>
                </button>-->
            </div>
        </div>
        <div class="form-input">
            <button id="login-btn">LOGIN</button>
        </div>
    </div>
    
    <script>
        (function () {
            const fonts = ["cursive", "sans-serif", "serif", "monospace"];
            let captchaValue = "";

            function generateCaptcha() {
                let value = btoa(Math.random() * 1000000000);
                value = value.substr(0, 5 + Math.random() * 5);
                captchaValue = value;
            }

            function setCaptcha() {
                const captchaPreview = document.querySelector(".login-form .captcha .preview");
                captchaPreview.innerHTML = captchaValue
                    .split("")
                    .map((char) => {
                        const rotate = -20 + Math.trunc(Math.random() * 30);
                        const font = fonts[Math.trunc(Math.random() * fonts.length)];
                        return `<span style="transform: rotate(${rotate}deg); font-family: ${font};">${char}</span>`;
                    })
                    .join("");
            }

            function initCaptcha() {
                const captchaRefresh = document.querySelector(".login-form .captcha .captcha-refresh");
                const captchaInput = document.querySelector(".login-form .captcha-form #captcha-input");

                captchaRefresh.addEventListener("click", function () {
                    generateCaptcha();
                    setCaptcha();
                });

                generateCaptcha();
                setCaptcha();

                document.querySelector(".login-form #login-btn").addEventListener("click", function () {
                    let enteredCaptchaValue = captchaInput.value;
                    if (enteredCaptchaValue === captchaValue) {
                        swal("", "Logging In!", "success");
                    } else {
                        swal("Invalid captcha");
                    }
                });
            }

            initCaptcha();
        })();
    </script>
</body>
</html>
