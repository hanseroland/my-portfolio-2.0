import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { Chip } from '@mui/material';
import { cardData } from '@/data/cardData';
import Link from 'next/link';




// --- Styled components ---
const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: { xs: '200px', sm: '100%', lg: '100%' },
    height: '100%',
    borderRadius: theme.shape.borderRadius * 1.5,
    background: theme.palette.mode === 'light'
        ? 'rgba(255,255,255,0.6)'
        : 'rgba(28,31,38,0.6)',
    backdropFilter: 'blur(18px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    transition: 'all 0.3s ease',


    width: '100%',
    [theme.breakpoints.down('sm')]: {
        width: '370px',
    },

    '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: `0 12px 35px ${theme.palette.primary.main}40`,
    },
    '&:focus-visible': {
        outline: `2px solid ${theme.palette.primary.main}`,
        outlineOffset: '3px',
    },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
    flexGrow: 1,
}));

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

function Author({ authors }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >
                <AvatarGroup max={3}>
                    {authors.map((author, index) => (
                        <Avatar
                            key={index}
                            alt={author.name}
                            src={author.avatar}
                            sx={{ width: 24, height: 24 }}
                        />
                    ))}
                </AvatarGroup>
                <Typography variant="caption">
                    {authors.map((author) => author.name).join(', ')}
                </Typography>
            </Box>
            <Typography variant="caption">July 14, 2021</Typography>
        </Box>
    );
}

Author.propTypes = {
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ).isRequired,
};



export default function CardProject() {

    const theme = useTheme();

    const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

    const handleFocus = (index) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };



    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >

            <Grid container spacing={2}>
                {
                    cardData.map((card, index) => (
                        <Grid
                            key={card.id}
                            size={{ xs: 12, sm: 6, md: 6 }}
                        >
                            <Link
                                href={`/projects/${card.id}`}
                                passHref
                                style={{
                                    textDecoration: 'none',
                                    //width: { xs: '100px', sm: '100%', lg: '100%' },
                                }}
                            >
                                <StyledCard>
                                    <CardMedia
                                        component="img"
                                        alt={card.title}
                                        image={card.img}
                                        sx={{
                                            aspectRatio: '16 / 9',
                                            borderBottom: '1px solid',
                                            borderColor: theme.palette.divider,
                                            borderTopLeftRadius: theme.shape.borderRadius * 1.5,
                                            borderTopRightRadius: theme.shape.borderRadius * 1.5,
                                        }}
                                    />
                                    <StyledCardContent>
                                        <Chip
                                            label={card.tag}
                                            size="small"
                                            sx={{
                                                alignSelf: 'flex-start',
                                                borderRadius: '1rem',
                                                backgroundColor: theme.palette.primary.main + '20',
                                                color: theme.palette.primary.main,
                                                fontWeight: 500,
                                            }}
                                        />
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
                                        >
                                            {card.title}
                                        </Typography>
                                        <StyledTypography variant="body2" color="text.secondary">
                                            {card.description ? card.description : card.context}
                                        </StyledTypography>
                                    </StyledCardContent>
                                </StyledCard>
                            </Link>
                        </Grid>
                    ))

                }


                {/*<Grid size={{ xs: 12, md: 6 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(1)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={cardData[1].img}
                            aspect-ratio="16 / 9"
                            sx={{
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div">
                                {cardData[1].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {cardData[1].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {cardData[1].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[1].authors} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(2)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
                        sx={{ height: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={cardData[2].img}
                            sx={{
                                height: { sm: 'auto', md: '50%' },
                                aspectRatio: { sm: '16 / 9', md: '' },
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div">
                                {cardData[2].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {cardData[2].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {cardData[2].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[2].authors} />
                    </SyledCard>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}
                    >
                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(3)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 3 ? 'Mui-focused' : ''}
                            sx={{ height: '100%' }}
                        >
                            <SyledCardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                }}
                            >
                                <div>
                                    <Typography gutterBottom variant="caption" component="div">
                                        {cardData[3].tag}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {cardData[3].title}
                                    </Typography>
                                    <StyledTypography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {cardData[3].description}
                                    </StyledTypography>
                                </div>
                            </SyledCardContent>
                            <Author authors={cardData[3].authors} />
                        </SyledCard>
                        <SyledCard
                            variant="outlined"
                            onFocus={() => handleFocus(4)}
                            onBlur={handleBlur}
                            tabIndex={0}
                            className={focusedCardIndex === 4 ? 'Mui-focused' : ''}
                            sx={{ height: '100%' }}
                        >
                            <SyledCardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                }}
                            >
                                <div>
                                    <Typography gutterBottom variant="caption" component="div">
                                        {cardData[4].tag}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {cardData[4].title}
                                    </Typography>
                                    <StyledTypography
                                        variant="body2"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        {cardData[4].description}
                                    </StyledTypography>
                                </div>
                            </SyledCardContent>
                            <Author authors={cardData[4].authors} />
                        </SyledCard>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <SyledCard
                        variant="outlined"
                        onFocus={() => handleFocus(5)}
                        onBlur={handleBlur}
                        tabIndex={0}
                        className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
                        sx={{ height: '100%' }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            image={cardData[5].img}
                            sx={{
                                height: { sm: 'auto', md: '50%' },
                                aspectRatio: { sm: '16 / 9', md: '' },
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div">
                                {cardData[5].tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {cardData[5].title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {cardData[5].description}
                            </StyledTypography>
                        </SyledCardContent>
                        <Author authors={cardData[5].authors} />
                    </SyledCard>
                </Grid> */}
            </Grid>
        </Box>
    );
}