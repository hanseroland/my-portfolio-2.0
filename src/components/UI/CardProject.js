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

const cardData = [
    {
        id: 1,
        img: 'https://picsum.photos/800/450?random=1',
        tag: 'Fullstack MERN / Next.js',
        title: '📌 Application web pour un institut de Head Spa (Nana Head Spa)',
        contexte: 'Création d’une solution digitale moderne pour gérer les clients et centraliser les informations de soins',
        description: `Création d’une solution digitale moderne pour gérer les clients et centraliser les informations de soins.
    Développement d’un site vitrine et d’un tableau de bord administrateur avec gestion des fiches clients (rendez-vous et soins).
    Authentification sécurisée via JWT cookies et déploiement full production (Render, Vercel, Gandi).`,
        result: 'Application complète en ligne qui centralise la gestion des clients et facilite le suivi des rendez-vous.',
        stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Render', 'Vercel'],
    },
    {
        id: 2,
        img: 'https://picsum.photos/800/450?random=2',
        tag: 'WordPress / SEO',
        title: '📌 SEO & intégration WordPress – Shineskinbar',
        contexte: 'Le site était lourd, pas ergonomique et n’apparaissait pas dans les résultats de recherche début 2025',
        description: `Optimisation SEO complète pour un institut de soins.
    Déploiement du site WordPress, recherche et intégration de mots-clés, optimisation du maillage interne et des pages de référencement.
    Création et optimisation de la fiche Google Business Profile (GBP).`,
        result: 'De février à septembre 2025 : 7K impressions Google, 511 clics, 25 appels générés, mots-clés en 1ère page.',
        stack: ['WordPress', 'SEO', 'Google Business Profile'],
    },
    {
        id: 3,
        img: 'https://picsum.photos/800/450?random=3',
        tag: 'MERN',
        title: '📌 Application MERN – Gestion de cartes NFC',
        contexte: 'Développement d’une solution de gestion de cartes de visite NFC pour les entreprises.',
        description: `Développement d’une solution de gestion de cartes de visite NFC pour les entreprises.
    Inclut un site client et un tableau de bord administrateur, gestion des utilisateurs et attribution des cartes NFC.`,
        result: 'Statut : en cours d’expérimentation avec les premiers utilisateurs.',
        stack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    },
];


const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: theme.palette.background.default,
    boxShadow: '0 10px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
        paddingBottom: 16,
    },
});

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
                gap: 4
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'start', md: 'center' },
                    gap: 4,
                    overflow: 'auto',
                }}
            >


            </Box>
            <Grid container spacing={3} columns={12}>
                {
                    cardData.map((card, index) => (
                        <Grid key={card.id} size={{ xs: 12, md: 6 }}>
                            <SyledCard
                                variant="outlined"
                                onFocus={() => handleFocus(0)}
                                onBlur={handleBlur}
                                tabIndex={0}
                                className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
                            >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image={card.img}
                                    sx={{
                                        aspectRatio: '16 / 9',
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                    }}
                                />
                                <SyledCardContent>
                                    <Typography gutterBottom variant="caption" component="div">
                                        {card.tag}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {card.title}
                                    </Typography>
                                    <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                        {card.description}
                                    </StyledTypography>
                                </SyledCardContent>

                            </SyledCard>
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