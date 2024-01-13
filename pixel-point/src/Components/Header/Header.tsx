import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Header() {
    return (
            <>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" style={{backgroundColor: '#0E0A0F'}}>
                        <Toolbar>
                            {/*<div>*/}
                            {/*    */}
                            {/*</div>*/}
                            <div style={{
                                margin: '0 auto',
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap', // Добавляем перенос для мобильных устройств
                                justifyContent: 'center', // Выравниваем элементы по центру
                            }}>
                                <Button style={{color: '#fff', textTransform: 'capitalize'}}>Integrations</Button >
                                <Button style={{color: '#fff', textTransform: 'capitalize'}}>Core Platform <KeyboardArrowDownIcon/></Button>
                                <Button style={{color: '#fff', textTransform: 'capitalize'}}>Company <KeyboardArrowDownIcon/></Button>
                                <Button style={{color: '#fff', textTransform: 'capitalize'}}>Resources <KeyboardArrowDownIcon/></Button>
                            </div>
                            <div>
                                <Button style={{color: '#fff', textTransform: 'capitalize'}}>Contact Sales</Button >
                                <Button style={{color: '#0E0A0F', fontWeight:600, textTransform: 'capitalize',
                                    backgroundColor:'#fff', borderRadius:'40px'}}>
                                    Core Platform</Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            </>
        );
}


