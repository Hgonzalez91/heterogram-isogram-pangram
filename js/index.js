// Función para determinar si una palabra o frase es un isograma
function esIsograma(palabra) {
    const frecuencias = {};
  
    // Contar la frecuencia de cada letra en la palabra
    for (let letra of palabra) {
      frecuencias[letra] = (frecuencias[letra] || 0) + 1;
    }
  
    // Verificar si todas las frecuencias son iguales
    const valoresFrecuencia = Object.values(frecuencias);
    const frecuenciaReferencia = valoresFrecuencia[0];
  
    return valoresFrecuencia.every(frecuencia => frecuencia === frecuenciaReferencia);
  }
  
  const palabraEjemplo1 = "papa";
  console.log(`Es isograma: ${esIsograma(palabraEjemplo1)}`);
  
  const palabraEjemplo2 = "papelera";
  console.log(`Es isograma: ${esIsograma(palabraEjemplo2)}`);
  
  const palabraEjemplo3 = "intestines";
  console.log(`Es isograma: ${esIsograma(palabraEjemplo3)}`);
  
  
  // Función para determinar si una palabra o frase es un heterograma
  function esHeterograma(palabra) {
    const letras = new Set();
    
    for (let letra of palabra) {
      if (letras.has(letra)) {
        return false;
      }
      letras.add(letra);
    }
  
    return true;
  }

  
  const palabra1 = "yuxtaponer";
  console.log(`Es Heterograma: ${esHeterograma(palabra1)}`);
  
  const palabra2 = "centrifugado ";
  console.log(`Es Heterograma: ${esHeterograma(palabra2)}`);
  
  const palabra3 = "caracas";
  console.log(`Es Heterograma: ${esHeterograma(palabra3)}`);
  
  // Función para determinar si una palabra o frase es un pangrama
  function esPangrama(frase) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const letrasFaltantes = new Set(alfabeto);
  
    for (let letra of frase.toLowerCase()) {
      letrasFaltantes.delete(letra);
    }
  
    return letrasFaltantes.size === 0;
  }
  
  const ejemplo1 = "Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú.";
  console.log(`Es pangrama: ${esPangrama(ejemplo1)}`);
  
  const ejemplo2 = "abcdefghijklmnopqrstuvwxyz.";
  console.log(`Es pangrama: ${esPangrama(ejemplo2)}`);
    
  const ejemplo3 = "programacion";
  console.log(`Es pangrama: ${esPangrama(ejemplo3)}`);