"use client"
import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from 'react-hook-form'
import Link from "next/link"
import { Input } from '@/src/app/components/ui/input'
import { Label } from '@/src/app/components/ui/label'
import { ArrowRight, CheckCircle } from 'lucide-react'

import styles from './Home.module.scss';

interface IFormInput {
    code: string
}

interface codeResponseProps {
    message?: string,
    warning?: string,
    codeExists: boolean,
    data?: [{
        activated: null,
        active: boolean,
        code: string,
        userId: string
    }]
}

export default function Home() {

    const [code, setCode] = useState("");
    const [codeResponse, setCodeReponse] = useState<codeResponseProps>();
    const { register, handleSubmit } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = data => setCode(data.code);

    useEffect(() => {

        const checkCode = async () => {
            const codeReq = await fetch(`/api/code/${code}`);
            const res = await codeReq.json();
            
            console.log(res);
            setCodeReponse(res);
        }


       

        checkCode();

    }, [code])

    useEffect(() => {

        const activateCode = async () => {
            const codeReq = await fetch("/api/code/activate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code })
            })

            const res = await codeReq.json()
            console.log(res);
        }

        activateCode();
    }, [code])
    
    return (
        <div className={styles.home}>
            <div className={styles.homeContent}>
                <h1>SINC will be publicly available soon.</h1>
                <p>Invited to the Early Beta?</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.codeInputContainer}>
                        <Input className={styles.codeInput} style={{ paddingBlock: '2rem', backgroundColor: `${codeResponse?.codeExists ? "hsl(168.42deg 51.78% 59.48%)" : "hsl(0deg 2.31% 8.68%);"} `} }  id="access-code" {...register("code")}  />
                        {
                            codeResponse?.codeExists && (
                                <CheckCircle className={styles.checkIcon} />
                            )
                        }
                        <Label htmlFor="access-code">
                            {
                                codeResponse ? 
                                <div className={styles.codeSuccessWrapper}>
                                    
                                  {
                                    <div dangerouslySetInnerHTML={{__html: codeResponse.message!}} />
                                  }
                                </div> : <>Enter your code here.</>
                            }
                        </Label>
                    </div>
                   {
                    codeResponse?.codeExists && (
                        <Link href="/api/auth/signin" className={styles.continueBtn}>Continue <ArrowRight /></Link>
                    )
                   }
                </form>
            </div>
        </div>
    )
}