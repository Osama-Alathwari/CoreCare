import CardLogin from '../component/bootcomponent/CardLogin';
import TitlePage from '../component/loginDetails/TitlePage';
import TextPage from '../component/loginDetails/TextPage';
import FormLogin from '../component/loginDetails/FormLogin';
import { TextInputField, PasswordInputField } from '../component/loginDetails/TextInputField';
import ForgotButton from '../component/loginDetails/ForgotButton';
import SignOrLogin from '../component/loginDetails/SignOrLogin';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { GeneralData, loginInfo } from '../Recoil/Atom';
import { useState } from 'react';

function LoginPage() {

    const loginInfoValue = useRecoilValue(loginInfo);
    const GeneralDataValue = useRecoilValue(GeneralData);
    const setGeneralData = useSetRecoilState(GeneralData);
    const navigate = useNavigate();

    const [p, setP] = useState('');

    const handleBlur = (pass) => {
        setP(pass);
        console.log('p= ' + p);
    }

    const handleUsername = async () => {
        console.log(`emailorusername: ${loginInfoValue.login}`);
        const loginData = {
            email: loginInfoValue.login,
            password: p
        };

        try {
            const userResponse = await fetch("http://localhost:5000/login/get", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            if (userResponse.ok) {
                const jsonData = await userResponse.json();
                console.log(jsonData.message);
                console.log("successful signin");
                navigate('/userprofile', { state: { userType: jsonData.userType } });
            } else {
                console.log("faild signin");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <CardLogin>
                <div className='card-body d-flex flex-column justify-content-center' style={{ width: '100%', alignItems: 'center', marginTop: '-100px' }}>
                    <TitlePage title="Login" />
                    <TextPage text='Fill out your personal details' />
                    <FormLogin buttonName='Login' onContinue={handleUsername}>
                        <TextInputField
                            label='Username, Email'
                            type='text'
                            placeholder='Enter your username or email'
                            required={true}
                            isLogin={true}
                            name='login'
                        />
                        <PasswordInputField label='Password' placeholder="Enter your password" onBlur={handleBlur} />
                    </FormLogin>
                    <ForgotButton />
                    <SignOrLogin goSign={true} />
                </div>
            </CardLogin>
            <Outlet />
        </>
    );
};

export default LoginPage;
