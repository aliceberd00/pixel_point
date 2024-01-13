import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
interface Iinformation {
    num: string;
    header: string;
    description: string;
}

const InformationCard: React.FC<Iinformation> = ({ num, header, description }) => {

    const gradientText = {
        backgroundImage: `linear-gradient(to bottom, #D383FC 10%, #CB6AFB 100%, #CB6AFB33 20%)`,
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        display: 'inline-block', // Для предотвращения "переливания" градиента на соседние элементы
    };


    return (
        <>
            <Box position="relative"
                 component="span"
                 sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
            >
                <div
                    style={{
                        content: "''",
                        position: 'absolute',
                        top: '-10px',
                        left: '-10px',
                        width: 'calc(15% + 20px)', // Ширина равна ширине компонента плюс отступы
                        height: 'calc(100% + 20px)',
                        borderRadius: '50%',
                        backgroundColor: '#9966FF',
                        opacity: 0.15,
                        filter: 'blur(20px)',
                    }}
                />
                <div
                    style={{
                        position: 'relative', // Позиционируем вложенный контейнер относительно родителя
                        zIndex: 1, // Поднимаем вложенный контейнер над эллипсом
                    }}
                >
                    <Typography variant="h1">
                        <span style={gradientText}>{num}</span>
                    </Typography>
                    <Typography style={{ color: '#fff', fontSize:'24px'}} sx={{ mb: 1.5 }} color="text.secondary">
                        {header}
                    </Typography>
                    <Divider style={{ background: '#fff' }} />
                    <Typography style={{ color: '#fff', fontSize:'18px' }} variant="body2">
                        {description}
                    </Typography>
                </div>
            </Box>
        </>
    );
};

export default InformationCard;
