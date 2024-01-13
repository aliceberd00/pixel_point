import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import LoadingButton from "@mui/lab/LoadingButton";

export default function LeftInterface() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('normal')

    console.log(status)

    function isValidEmail(email: string) {
            return /\S+@\S+\.\S+/.test(email);
        }

    const handleButtonClick = () => {
        if (email.trim() === '') {
            setStatus('required');
        } else if (isValidEmail(email)) {
            setStatus('success');
        } else {
            setStatus('loading');
            setTimeout(() => {
                setStatus('error');
            }, 2000);
        }
    };

    return (
        <div style={{ marginTop: "60px" }}>
            <div
                style={{
                    content: "''",
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    width: 'calc(30% + 20px)',
                    height: 'calc(50% + 20px)',
                    borderRadius: '50%',
                    backgroundColor: '#9966FF',
                    opacity: 0.15,
                    filter: 'blur(100px)',
                }}
            />
            <Typography variant="h2" style={{ color: '#fff' }}>
                Unlock valuable insights from subscription data
            </Typography>
            <Typography variant="h6" style={{ color: '#fff' }}>
                Analyze your subscription ecosystem for cost optimization and risk management
            </Typography>

            {status == 'normal'&&
            <TextField
                style={{
                    backgroundColor: '#CB6AFB',
                    borderRadius: '30px',
                    opacity: '90%',
                    boxShadow: '0 0 0 0',
                }}
                label="Your business email..."
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button
                                variant="contained"
                                style={{
                                    color: '#0E0A0F',
                                    backgroundColor: '#9966FF',
                                    borderRadius: '60px',
                                    fontWeight: 'bold',
                                }}
                                onClick={handleButtonClick}
                            >
                                Free Trial
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />}

            {status === 'required' &&  (
                <>
                    <TextField
                        style={{
                            backgroundColor: '#CB6AFB',
                            borderRadius: '30px',
                            opacity: '90%',
                            boxShadow: '0 0 0 0',
                        }}
                        label="Your business email..."
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button variant="contained" style={{
                                        color: '#0E0A0F',
                                        backgroundColor: '#9966FF',
                                        borderRadius: '60px',
                                        fontWeight: 'bold',
                                    }}>
                                        Free Trial
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <p style={{ color: '#F04242', marginLeft: '10px' }}>Email is a required field</p>
                </>
            )}

            {status === 'success' && (
                <>
                    <TextField
                        style={{
                            backgroundColor: '#CB6AFB',
                            borderRadius: '30px',
                            opacity: '90%',
                            boxShadow: '0 0 0 0',
                        }}
                        label="Your business email..."
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button style={{backgroundColor:'#40BFAA', borderRadius:80}}>
                                        <DoneIcon style={{color:'#fff'}}/>
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </>
            )

            }

            {status === 'error' && (
                <>
                    <TextField
                        style={{
                            backgroundColor: '#CB6AFB',
                            borderRadius: '30px',
                            opacity: '90%',
                            boxShadow: '0 0 0 0',
                        }}
                        label="Oops! Something went wrong..."
                        fullWidth
                        // required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button style={{backgroundColor:'#9966FF', borderRadius:80}}>
                                        <ClearIcon style={{color:'#fff'}}/>
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </>
            )

            }

            {status === 'loading' && (
                <>
                    <TextField
                        style={{
                            backgroundColor: '#CB6AFB',
                            borderRadius: '30px',
                            opacity: '90%',
                            boxShadow: '0 0 0 0',
                        }}
                        label="Your business email..."
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <LoadingButton loading style={{backgroundColor:'#9966FF', borderRadius:80}}>
                                            //
                                    </LoadingButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </>
            )

            }

        </div>
    );
}