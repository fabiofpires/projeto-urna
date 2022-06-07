let etapas = [
    {
        titulo: 'VEREADOR', 
        numeros: 5, 
        candidatos: [
            {
                numero: '38111', // <- Colocar como String 
                nome: 'Oracio Martins', 
                partido: 'ABC',
                fotos:[
                    {url: '38111.jpg', legenda: 'VEREADOR'}
                ]
            },
          {
              numero: '77222',  // <- Colocar como String 
              nome: 'Kassandra Monarka',
              partido: 'DEFG',
              fotos:[
                  {url: '77222.jpg', legenda:'VEREADOR'}
              ]
          },
        ]
    },
    {
        titulo: 'PREFEITO', 
        numeros: 2, 
        candidatos: [
            {
                numero: '99',  // <- Colocar como String 
                nome: 'Janilson Janete', 
                partido: 'ABC', 
                vice: 'Cic', 
                fotos: [
                    {url: '99.jpg', legenda: 'Prefeito'},
                    {url: '99_2.jpg', legenda: 'Vice-Prefeito', small: true}
                  ] 

               },
            {
                numero: '84',  // <- Colocar como String 
                nome: 'Zulano',
                partido: 'QWERTY',
                vice: 'Zul',
                fotos: [
                    {url: '84.jpg', legenda: 'Prefeito'}, 
                    {url: '84_2.jpg', legenda: 'Vice-Prefeito', small: true}
                ]
            },
        ]
    }

];