import samuel from '../assets/avatar-samuel.png';
import francisco from '../assets/avatar-francisco.png';
import ana from '../assets/avatar-ana.png';

const comments = [
  {
    image: samuel,
    name: 'Samuel Vidal Hernández',
    comment: 'Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso.',
    date: '2 meses',
    feedback: null,
  },
  {
    image: francisco,
    name: 'Francisco José Sacedo',
    comment: 'Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto.',
    date: '3 meses',
    feedback: {
      comment: 'Este texto es una simulación de una contestación del equipo o del profesor directamente. El texto tendrá un aspecto diferenciado, y también tendrá un destaque mayor.',
      from: 'Equipo Unycos',
      date: '3 meses'
    },
  },
  {
    image: ana,
    name: 'Ana Milena Gómez',
    comment: 'Profundizar en el entrenamiento y proceso de enseñanza.',
    date: '3 meses',
    feedback: {
        comment: 'Hola, Ana! Continúa a practicar y seguro que mejorarás más y más tu desempeño! Un abrazo!',
        from: 'Mireia Belmonte • Professor',
        date: '3 meses'
      },
  },
];
 
export default comments;