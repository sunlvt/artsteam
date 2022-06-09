window.addEventListener('DOMContentLoaded', () => {
    let loginButton = document.getElementById('login-button')
    let loginForm = document.getElementById('login-form')

    let registerButton = document.getElementById('register-button')
    let registerForm = document.getElementById('register-form')

    let checkValidInput = (str) => {
        return str != ''
    }

    let checkPassMinLength = (str) => {
        return str.length >= 8
    }

    if (loginButton) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault()
            let username = document.getElementById('username')
            let pass = document.getElementById('password')

            let usernameErrorSpan = document.getElementById('username-error-span')
            let passErrorSpan = document.getElementById('password-error-span')

            // reset error
            usernameErrorSpan.innerHTML = ''
            passErrorSpan.innerHTML = ''

            // check error
            if (!checkValidInput(username.value)) {
                usernameErrorSpan.innerHTML = 'Tên người dùng / Email không được trống.'
                return
            }

            if (!checkValidInput(pass.value)) {
                passErrorSpan.innerHTML = 'Mật khẩu không được trống.'
                return
            }

            if (!checkPassMinLength(pass.value)) {
                passErrorSpan.innerHTML = 'Mật khẩu phải có ít nhất 8 ký tự.'
                return
            }

            // submit credential
            location.href = "TrangChu.html"
        })
    }

    if (registerButton) {
        registerButton.addEventListener('click', function(e) {
            e.preventDefault()
            let email = document.getElementById('email')
            let pass = document.getElementById('password')
            let confirmPass = document.getElementById('password-confirm')

            let emailErrorSpan = document.getElementById('email-error-span')
            let passErrorSpan = document.getElementById('password-error-span')
            let passConfirmErrorSpan = document.getElementById(
                'password-confirm-error-span'
            )

            // reset error
            emailErrorSpan.innerHTML = ''
            passErrorSpan.innerHTML = ''
            passConfirmErrorSpan.innerHTML = ''

            // check error
            if (!checkValidInput(email.value)) {
                emailErrorSpan.innerHTML = 'Email không được trống.'
            }

            if (!checkValidInput(pass.value)) {
                passErrorSpan.innerHTML = 'Mật khẩu không được trống.'
            }

            if (!checkValidInput(confirmPass.value) ||
                pass.value != confirmPass.value
            ) {
                passConfirmErrorSpan.innerHTML =
                    'Mật khẩu xác nhận chưa giống với mật khẩu'
            }

            if (!checkPassMinLength(pass.value)) {
                passErrorSpan.innerHTML = 'Mật khẩu phải có ít nhất 8 ký tự.'
                return
            }

            // submit credential
            document.getElementById('register-form').style.display = 'none';
            document.getElementById('dangky-thanhcong').style.display = 'block';

        })
    }
})