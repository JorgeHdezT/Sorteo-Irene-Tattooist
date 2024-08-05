const usuarios = [
  { nombre: 'elahxdxd', comentarios: 24 },
  { nombre: 'jk_glezz', comentarios: 4 },
  { nombre: 'hgwrtshome', comentarios: 1 },
  { nombre: 'franklin28051982', comentarios: 13 },
  { nombre: 'midorima_risk', comentarios: 3 },
  { nombre: 'maax.diazz17', comentarios: 7 },
  { nombre: '__rguezz99', comentarios: 36 },
  { nombre: 'yanira_ramos_jimenez', comentarios: 46 },
  { nombre: 'oscartvit', comentarios: 15 },
  { nombre: 'granenyd', comentarios: 4 },
  { nombre: '_lucelesteafonso', comentarios: 14 },
  { nombre: 'jenny.abreu14', comentarios: 51 }
];

function sortear() {
  const totalComentarios = usuarios.reduce((total, usuario) => total + usuario.comentarios, 0);
  let rand = Math.random() * totalComentarios;
  let seleccionado = usuarios[0];
  let suplentes = [];

  // Elegir el ganador
  for (const usuario of usuarios) {
      rand -= usuario.comentarios;
      if (rand <= 0) {
          seleccionado = usuario;
          break;
      }
  }

  // Elegir dos suplentes
  const usuariosRestantes = usuarios.filter(usuario => usuario !== seleccionado);
  for (let i = 0; i < 2; i++) {
      rand = Math.random() * usuariosRestantes.reduce((total, usuario) => total + usuario.comentarios, 0);
      let suplente = usuariosRestantes[0];
      for (const usuario of usuariosRestantes) {
          rand -= usuario.comentarios;
          if (rand <= 0) {
              suplente = usuario;
              break;
          }
      }
      suplentes.push(suplente);
      // Elimina el suplente elegido para no seleccionarlo nuevamente
      usuariosRestantes.splice(usuariosRestantes.indexOf(suplente), 1);
  }

  // Mostrar el ganador y los suplentes
  document.getElementById('resultado').innerText = `Ganador: ${seleccionado.nombre} - Comentarios: ${seleccionado.comentarios}`;
  document.getElementById('suplente1').innerText = `Suplente 1: ${suplentes[0].nombre} - Comentarios: ${suplentes[0].comentarios}`;
  document.getElementById('suplente2').innerText = `Suplente 2: ${suplentes[1].nombre} - Comentarios: ${suplentes[1].comentarios}`;
}