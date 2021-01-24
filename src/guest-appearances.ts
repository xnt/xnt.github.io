export class Appearance {
  link: string;
  linkTitle: string;
  title: string;

  constructor(_link: string, _linkTitle: string, _title: string) {
    this.link = _link;
    this.linkTitle = _linkTitle;
    this.title = _title;
  }
}

export const APPEARANCES = [
  new Appearance("https://open.spotify.com/episode/6gFUO57cKMQtWgGH8DwfUf",
    "Podcast", "Chile, Mole y Tech. E31: Creando Equipos en Tech"),
  new Appearance("https://www.youtube.com/watch?v=X_4D8mppVeY",
    "Video", "The Dojo: Conviértete en un Buen Líder Técnico"),
  new Appearance("https://www.youtube.com/watch?v=fX1YUJXWWwU",
    "Talk", "NearsoftCon 2018: El Truco que me ayudó a desbloquear superpoderes"),
  new Appearance("https://www.youtube.com/watch?v=4MZ6vk5q88g",
    "Talk", "Nearsoft Talks: Communication, motivation and self-management in the remote age"),
  new Appearance("https://www.youtube.com/watch?v=SSA4MMQGKns",
    "Video", "The Dojo: Desarrolla tu Carrera en Tecnología"),
  new Appearance("https://www.youtube.com/watch?v=dEzUr_3rU2U",
    "Live", "Devz Live: Historias de Horrores y Errores en tu Carrera Profesional"),
  new Appearance("https://www.youtube.com/watch?v=IHrqenVs-dg",
    "Video", "The Dojo: 20 consejos para mejorar como desarrollador"),
  new Appearance("https://www.facebook.com/DevzCommunity/videos/2706211403001621",
    "Live", "Devz Live: AMA"),
  new Appearance("https://www.youtube.com/watch?v=AvtHJjXAFkQ",
    "Live", "Cafe con amigos"),
];