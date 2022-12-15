import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'

function Hero() {
  const { title, contents } = {
    title: "データ駆動型歴史情報研究基盤の構築",
    contents:
      "史料編纂所が150年にわたって蓄積した日本史の研究資源を、Society5.0に対応し、さらに100年にわたって維持・発展させるための歴史情報研究基盤構築を行います。国際的に卓越した日本史の情報研究拠点の拡充を行い、情報学とコラボレーションして人文系分野のさらなる活性化や学術の多様性を支える基盤の強化を実現していきます。また研究活動を通じて若手研究者を高度な専門性を持つ研究者に育成し、歴史データの発信によって学術成果の社会への還元を目指します。",
  };
  return (
    <Box
      sx={{
        py: { xs: "2vh", sm: "10vh" },
        px: { xs: "0vw", sm: "6vw" },
      }}
    >
      <Typography
        style={{
          fontWeight: "bold",
        }}
        variant="h3"
        align="center"
      >
        {title}
      </Typography>
      <Typography variant="h6" align="center">
        {contents}
      </Typography>
    </Box>
  );
}

export default Hero