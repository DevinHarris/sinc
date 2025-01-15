import NutriSincPage from './NutriSinc'
import AuthAccess from '../AuthAccess';

import styles from './nutrisincPage.module.scss';

export default function Page() {

    return (
       <AuthAccess>
            <NutriSincPage />
       </AuthAccess>
    )
}