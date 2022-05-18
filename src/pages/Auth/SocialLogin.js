import React from 'react';
import {FcGoogle} from 'react-icons/fc'

const SocialLogin = () => {
    return (
        <div className="form__socials mt-4">
            <div>
                <button className='w-100 py-3 google-btn'>
                    <FcGoogle className='form__socials-icon google__icon me-2' /> Google Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;