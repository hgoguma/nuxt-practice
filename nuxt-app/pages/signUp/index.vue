<template>
    <div class="contents">
        <form class="registerForm">
            <div class="titleWrapper">
                <h3>회원가입</h3>
            </div>
            <hr />
            <div class="inputWrapper">
                <div class="label">아이디</div>
                <b-form-input type="text" v-model="id" @blur="idCheck" ref="idInput" />
                <span class="warning" :class="{'show' : idWarningMsg !== ''}">{{idWarningMsg}}</span>
            </div>
            <div class="inputWrapper">
                <div class="label">비밀번호</div>
                <b-form-input type="password" v-model="password"  @blur="pwdCheck" ref="pwdInput" />
                <span class="warning" :class="{'show' : pwdWarningMsg !== ''}">{{pwdWarningMsg}}</span>
            </div>
            <div class="inputWrapper">
                <div class="label">비밀번호 재입력</div>
                <b-form-input type="password" v-model="passwordConfirm"  @blur="pwdConfirmCheck" ref="pwdConfirmInput" />
                <span class="warning" :class="{'show' : pwdConfirmWarningMsg !== ''}">{{pwdConfirmWarningMsg}}</span>
            </div>
            <div class="inputWrapper">
                <div class="label">닉네임</div>
                <b-form-input type="text" v-model="nickname" @blur="nicknameCheck" ref="nicknameInput" />
                <span class="warning" :class="{'show' : nicknameWarningMsg !== ''}">{{nicknameWarningMsg}}</span>
            </div>
            <b-button class="btn submit" @click.prevent="submit" block>등록</b-button>
        </form>
    </div>
</template>

<style scoped>
    @import 'assets/style.css';

    .contents {
        min-height: 100vh;
        background-color: #344a71;
    }

    .label {
        color: #9ba5a8;
        margin: 10px 0;
    }

    .registerForm {
        background-color: #fff;
        width: calc(100vw - 700px);
        margin: 45px auto;
        padding: 30px;
        min-width: 300px;
        border-radius: 3px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }

    .titleWrapper {
        padding: 10px;
    }

    .inputWrapper {
        margin: 20px 0;
    }

    .btn.submit {
        background-color: #49c1a2;
        color: #fff;
        border: none;
    }

    .warning {
        display: none;
        font-size: 13px;
        margin-top: 10px;
    }

    .warning.show {
        display: block;
    }

</style>

<script>
export default {
    data() {
        return {
            id: '',
            password: '',
            passwordConfirm: '',
            nickname: '',
            idWarningMsg: '',
            pwdWarningMsg: '',
            pwdConfirmWarningMsg: '',
            nicknameWarningMsg: '',
            submitBtnFlag: true //버튼 활성화
        }
    },
    methods: {
        idCheck() {
            //공백 체크
            if(this.id.trim() === '') {
                this.idWarningMsg = '아이디를 입력해주세요';
                this.$refs.idInput.focus();
                this.submitBtnFlag = false;
                return;
            }
            //유효성 체크
            let idRegExp = /^[0-9a-z]+$/;
            if(!idRegExp.test(this.id)) {
                this.idWarningMsg = '아이디는 숫자, 영문만 입력해주세요';
                this.$refs.idInput.focus();
                this.submitBtnFlag = false;
                return;
            }
            this.idWarningMsg = '';
        },
        pwdCheck() {
            //공백 체크
            if(this.password.trim() === '') {
                this.pwdWarningMsg = '비밀번호를 입력해주세요';
                this.$refs.pwdInput.focus();
                this.submitBtnFlag = false;
                return;
            }
            //유효성 체크
            let pwdRegExp = /^[A-Za-z0-9]{6,12}$/;
            if(!pwdRegExp.test(this.password)) {
                this.pwdWarningMsg = '비밀번호는 숫자, 문자 포함의 6~12 자리 이내로 입력해주세요';
                this.$refs.pwdInput.focus();
                this.submitBtnFlag = false;
                return;
            }
            this.pwdWarningMsg = '';
        },
        pwdConfirmCheck() {
            //공백 체크
            if(this.passwordConfirm.trim() === '') {
                this.pwdConfirmWarningMsg = '비밀번호를 입력해주세요';
                this.$refs.pwdConfirmInput.focus();
                this.submitBtnFlag = false;
                return;
            }
            //유효성 체크
            console.log(this.password);
            console.log(this.passwordConfirm);
            if(this.password !== this.passwordConfirm) {
                console.log('비번 일치x');
                this.pwdConfirmWarningMsg = '비밀번호가 일치하지 않습니다.';
                this.$refs.pwdConfirmInput.focus();
                this.submitBtnFlag = false;
                return;
            }
            this.pwdConfirmWarningMsg = '';
        },
        nicknameCheck() {
            //공백 체크
            if(this.nickname.trim() === '') {
                this.nicknameWarningMsg = '닉네임을 입력해주세요';
                this.$refs.nicknameInput.focus();
                this.submitBtnFlag = false;
                return;
            }
            this.nicknameWarningMsg = '';
        },
        submit() {
            if(!this.submitBtnFlag || this.id === '' || this.password === '' || this.passwordConfirm === '' || this.nickname === '') {
                console.log('nope');
                return;
            }
        }
    }
}
</script>