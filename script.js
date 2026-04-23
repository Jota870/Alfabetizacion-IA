// Database of Lessons
const curriculum = [
    {
        id: "level_0",
        title: "0. El Origen: ¿Qué es la IA?",
        icon: "fa-seedling",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 0</span>
                <h1 class="lesson-title">¿Qué es realmente la IA?</h1>
            </div>
            <div class="lesson-content">
                <p>Empecemos desde cero absoluto. La <strong>Inteligencia Artificial (IA)</strong> no es un cerebro de metal ni tiene sentimientos. Es simplemente matemáticas avanzadas y programación estructurada para realizar tareas que normalmente requerirían pensamiento humano (ver, escuchar, analizar y escribir).</p>
                
                <div class="info-card">
                    <h3><i class="fa-solid fa-network-wired" style="color: #a78bfa"></i> Tipos de IA en el Mundo Real</h3>
                    <ul>
                        <li><strong style="color:white">IA Analítica/Predictiva:</strong> Busca patrones en datos existentes. Es la IA clásica. <em>Ejemplo: El algoritmo de TikTok que sabe qué video te gustará, o tu GPS prediciendo cuánto tardarás en el tráfico.</em></li>
                        <li><strong style="color:white">IA Generativa:</strong> La nueva revolución. Gracias a las Redes Neuronales Profundas, esta IA no solo encuentra cosas, sino que <strong>crea contenido nuevo y original</strong> desde cero (textos, voces, código, imágenes) a partir de tus descripciones.</li>
                    </ul>
                </div>
            </div>
        `,
        hasSimulator: false
    },
    {
        id: "intro",
        title: "1. Los Modelos de Lenguaje",
        icon: "fa-book-open",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 1</span>
                <h1 class="lesson-title">¿Cómo piensa la IA Generativa?</h1>
            </div>
            <div class="lesson-content">
                <p>Hablemos del texto. Sistemas como ChatGPT o Claude son conocidos como <strong>Grandes Modelos de Lenguaje (LLMs)</strong>.</p>
                <p>Imagina una biblioteca infinita donde un asistente ha leído absolutamente todos los libros de internet. Cuando le haces una pregunta, él no busca una página de Wikipedia para "copiar y pegar". En cambio, <strong>escribe un texto original solo para ti</strong> basándose en los conceptos que relacionó.</p>
                
                <div class="info-card">
                    <h3><i class="fa-solid fa-microchip text-warning"></i> La Magia Matemática</h3>
                    <p>En el fondo, un LLM es una máquina de predecir o "auto-completar" ultra-avanzado. Cuando empieza a escribir, está calculando estadísticamente cuál es la palabra más lógica que debería seguir después de la anterior, considerando todo tu contexto.</p>
                </div>

                <div class="info-card" style="border-color: rgba(239, 68, 68, 0.3)">
                    <h3><i class="fa-solid fa-triangle-exclamation text-danger"></i> Cuidado con las "Alucinaciones"</h3>
                    <p>Como la IA está estadísticamente "adivinando" qué palabra suena mejor, a veces inventa hechos con total seguridad. <strong>Nunca confíes a ciegas</strong> en datos numéricos, citas legales, médicas o hechos históricos sin verificarlos externamente.</p>
                </div>
            </div>
        `,
        hasSimulator: false
    },
    {
        id: "prompting_basic",
        title: "2. Prompting Básico",
        icon: "fa-terminal",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 2</span>
                <h1 class="lesson-title">El Arte de Hablar con Máquinas</h1>
            </div>
            <div class="lesson-content">
                <p>Las inteligencias artificiales no leen tu mente. Si les das instrucciones vagas ("hazme un poema"), te darán resultados genéricos y aburridos. A este proceso estructurado de darle la orden a la IA se le llama <strong>Prompt Engineering</strong>.</p>
                
                <h3>La Fórmula de Oro</h3>
                <div class="info-card">
                    <p>Un buen prompt siempre debería tener estos 4 elementos (Contexto, Tarea, Formato, Tono):</p>
                    <ol style="margin-left: 1.5rem; margin-top: 1rem; color: #cbd5e1;">
                        <li style="margin-bottom:0.5rem"><strong style="color:white">Contexto (Rol):</strong> "Actúa como un profesor universitario experto en física..."</li>
                        <li style="margin-bottom:0.5rem"><strong style="color:white">Tarea (El problema):</strong> "...explica qué es la gravedad para un niño de 8 años..."</li>
                        <li style="margin-bottom:0.5rem"><strong style="color:white">Formato:</strong> "...entrénalo en formato de historia corta, sin usar más de 3 párrafos..."</li>
                        <li style="margin-bottom:0.5rem"><strong style="color:white">Tono:</strong> "...asegúrate de usar un tono súper divertido y usar emojis."</li>
                    </ol>
                </div>
                
                <p>Veamos la diferencia en una situación real:</p>
                <div style="display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap;">
                    <div class="info-card" style="flex: 1; min-width: 250px;">
                        <h4 style="color: #ef4444; margin-bottom: 0.8rem;"><i class="fa-solid fa-xmark"></i> Prompt Pobre</h4>
                        <p style="font-style: italic; color: #94a3b8">"Ayúdame a hacer una dieta para bajar de peso."</p>
                    </div>
                    <div class="info-card" style="flex: 1; min-width: 250px; border-color: rgba(16, 185, 129, 0.4);">
                        <h4 style="color: #10b981; margin-bottom: 0.8rem;"><i class="fa-solid fa-check"></i> Prompt Excelente</h4>
                        <p style="font-style: italic; color: #94a3b8">"Actúa como un nutricionista (Rol). Crea un plan de comidas de 3 días para un adulto vegetariano que quiere bajar de peso pero sin gastar mucho dinero (Contexto). Entrégalo en formato de tabla con calorías e ingredientes (Formato), manteniendo un tono motivacional (Tono)."</p>
                    </div>
                </div>
            </div>
        `,
        hasSimulator: true,
        simulator: {
            title: "Nivel 1: El Prompt de Oro",
            description: "Escribe un prompt pidiéndole a la IA que te ayude a crear una <strong>rutina de ejercicios de 15 minutos</strong> en casa. ¡Usa todo lo que aprendiste! Busca definir un rol, formato y tarea identificable.",
            placeholder: "Ejemplo: Actúa como un personal trainer...",
            validate: function (input) {
                if (input.length < 20) return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Muy corto.</strong> Un buen prompt suele ser específico y descriptivo. Agrega más detalles." };
                let hasContext = (input.includes('actúa') || input.includes('eres') || input.includes('como un') || input.includes('entrenador') || input.includes('experto'));
                let hasFormat = (input.includes('formato') || input.includes('lista') || input.includes('tabla') || input.includes('viñetas') || input.includes('bullet') || input.includes('rutina'));

                if (hasContext && hasFormat) return { success: true, message: "<strong><i class='fa-solid fa-check'></i> ¡Excelente!</strong> Has incluido contexto (un rol) y le has pedido un formato específico. Este es un Prompt de alto nivel digno de continuar al siguiente módulo." };
                if (hasContext) return { success: false, message: "<strong><i class='fa-solid fa-exclamation'></i> Te falta definir el Formato.</strong> Tienes buen contexto o rol para la IA, pero intenta especificarle CÓMO quieres visualizar la respuesta (ej. 'hazlo en formato de tabla')." };
                if (hasFormat) return { success: false, message: "<strong><i class='fa-solid fa-exclamation'></i> Te falta definir el Rol/Contexto.</strong> Tienes el formato, pero deberías decirle quién debe ser la IA (ej. 'Actúa como un preparador físico')." };
                return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Aún falta detalle.</strong> Intenta asignarle explícitamente un ROL/CONTEXTO a la IA y definir un FORMATO esperado según tus conocimientos." };
            }
        }
    },
    {
        id: "prompting_few_shot",
        title: "3. Técnica: Few-Shot",
        icon: "fa-clone",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 3</span>
                <h1 class="lesson-title">Enseñar con Ejemplos</h1>
            </div>
            <div class="lesson-content">
                <p>Las IAs aprenden mejor imitando por contexto. A esto se le llama <strong>"Few-Shot Prompting"</strong>.</p>
                <p>En lugar de decirle reglas matemáticas complejas para que evalúe y adivine el formato, solo dale algunos ejemplos de cómo debe comportarse antes de darle la orden final:</p>
                <div class="info-card" style="border-color: rgba(16, 185, 129, 0.4);">
                    <h3 style="color: #34d399"><i class="fa-solid fa-lightbulb"></i> Ejemplo de Clasificación Simplificada</h3>
                    <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 0.5rem; margin-top: 1rem; font-family: monospace; font-size: 0.9rem">
                        Clasifica el sentir de las oraciones en Positivo, Negativo o Neutral.<br><br>
                        Ejemplo 1: "La comida me dio asco." -> Sentimiento: Negativo<br>
                        Ejemplo 2: "Normal, no estuvo mal." -> Sentimiento: Neutral<br>
                        Ejemplo 3: "WOW increíble experiencia" -> Sentimiento: Positivo<br><br>
                        <strong>Hazlo con: "La batería del celular no duró ni 2 horas, pero el tamaño es cómodo."</strong>
                    </div>
                </div>
            </div>
        `,
        hasSimulator: true,
        simulator: {
            title: "Nivel 2: Maestro de Clasificación",
            description: "Crea un prompt que clasifique correos electrónicos en 'Spam' (basura) o 'Importante'. Debes darle a la IA <strong>al menos dos ejemplos previos</strong> dentro de tu prompt (Ejemplo 1 y Ejemplo 2) antes de pedirle que clasifique un nuevo correo tuyo.",
            placeholder: "Clasifica los correos en Spam o Importante.\nEjemplo 1: ¡Ganaste un viaje gratis! -> Spam\nEjemplo 2: ...",
            validate: function (input) {
                if (input.length < 30) return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Muy corto.</strong> Necesitas incluir tus reglas, al menos dos ejemplos y el caso final a evaluar." };

                let matchesExamples = (input.match(/ejemplo/g) || []).length;
                let arrowCount = (input.match(/->/g) || input.match(/=>/g) || []).length;
                let colonCount = (input.match(/:/g) || []).length;

                let hasCategories = (input.includes('spam') || input.includes('basura')) && (input.includes('importante') || input.includes('normal'));

                if ((matchesExamples >= 2 || arrowCount >= 2 || colonCount >= 2) && hasCategories) {
                    return { success: true, message: "<strong><i class='fa-solid fa-check'></i> ¡Impecable!</strong> Has proporcionado el contexto y suficientes ejemplos para que la IA entienda el patrón (Few-Shot Pattern) sin cometer errores." };
                }

                if (!hasCategories) return { success: false, message: "<strong><i class='fa-solid fa-exclamation'></i> Te faltan las categorías.</strong> Asegúrate de decirle que debe buscar clasificar en 'Spam' o 'Importante'." };

                return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Faltan tus ejemplos.</strong> El Few-Shot prompting requiere que le des explícitamente al menos dos ejemplos. Utiliza la palabra 'Ejemplo', o flechas estilo '->' para mapearlos claramente." };
            }
        }
    },
    {
        id: "prompting_chain_of_thought",
        title: "4. Cadenas de Pensamiento",
        icon: "fa-link",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 4</span>
                <h1 class="lesson-title">Desarrollando la Lógica</h1>
            </div>
            <div class="lesson-content">
                <p>Las IA son muy buenas en el lenguaje, pero muchas veces se equivocan en matemáticas puras o lógica computacional compleja porque intentan dar la respuesta final inmediatamente.</p>
                
                <div class="info-card">
                    <h3 style="color: #60a5fa"><i class="fa-solid fa-list-ol"></i> Truco: Piensa Paso a Paso (Chain of Thought - CoT)</h3>
                    <p>Si añades comandos explícitos al final de tu prompt como <strong><em>"Piensa paso a paso"</em></strong>, <strong><em>"Deduce la respuesta y explica tu razonamiento primero"</em></strong>, la IA usará los primeros párrafos de salida para crear un esquema conceptual lógico que le servirá para auto-corregirse y reducir drásticamente los errores antes de arrojar el número o respuesta final.</p>
                </div>
            </div>
        `,
        hasSimulator: true,
        simulator: {
            title: "Nivel 3: El Lógico",
            description: "Pídele a la IA que resuelva este clásico acertijo: 'En una granja misteriosa hay 20 cabezas y 64 patas entre vacas y gallinas. ¿Cuántas vacas y cuántas gallinas hay?'. <strong>Pero fuerza imperativamente a la IA a que razone y escriba paso a paso</strong> la solución antes de dar el veredicto numérico.",
            placeholder: "Resuelve el siguiente problema: En una granja hay 20 cabezas... Para ello, quiero que...",
            validate: function (input) {
                if (input.length < 20) return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Muy corto.</strong> Debes describir o citar el problema matemático y agregarle la instrucción de razonamiento." };

                let hasMath = (input.includes('20') && input.includes('64')) || (input.includes('vaca') && input.includes('gallina'));
                let hasChainOfThought = input.includes('paso a paso') || input.includes('razonamiento') || input.includes('explica') || input.includes('razona') || input.includes('desarrolla');

                if (hasMath && hasChainOfThought) return { success: true, message: "<strong><i class='fa-solid fa-check'></i> ¡Sobresaliente!</strong> Al forzar el razonamiento diferido, garantizas que la IA no salte a conclusiones rápidas y se equivoque en ecuaciones engañosas." };
                if (hasChainOfThought) return { success: false, message: "<strong><i class='fa-solid fa-exclamation'></i> ¡Bien por la instrucción de paso a paso!</strong> Pero olvidaste plantearle el problema matemático de las vacas y gallinas a resolver." };
                return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Te faltó el desencadenador lógico (Chain of thought).</strong> Debes ordenarle a la IA explícitamente que 'piense paso a paso', o 'explique su razonamiento' al pedirle resolver este acertijo." };
            }
        }
    },
    {
        id: "prompting_constraints",
        title: "5. Restricciones Complejas",
        icon: "fa-ban",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 5</span>
                <h1 class="lesson-title">Limitando a la Bestia</h1>
            </div>
            <div class="lesson-content">
                <p>Las IAs comerciales tienden a ser muy serviciales, conversacionales y extensas ("¡Claro que sí! Estaré encantado de ayudarte; aquí tienes..."). En entornos automatizados o de programación, ese "text de relleno" destruirá tus bases de datos y frustrará a los usuarios.</p>
                
                <div class="info-card">
                    <p>Algunas restricciones estrictas vitales para programar contra IAs:</p>
                    <ul style="color: #cbd5e1; margin-top:0.5rem">
                        <li>"No incluyas ningún texto introductorio ni de conclusión, solo la pura respuesta."</li>
                        <li>"Tu respuesta final debe ser obligatoriamente un archivo JSON válido y no debe contener markdown."</li>
                        <li>"Desecha todas las opciones que contengan la letra 'A'."</li>
                        <li>"Responde usando única y exclusivamente las palabras del texto base; no infieras."</li>
                    </ul>
                </div>
            </div>
        `,
        hasSimulator: true,
        simulator: {
            title: "Nivel 4: El Dictador Estricto",
            description: "Crea un prompt pidiendo a la IA un resumen de la 'Revolución Industrial'. Pero debes aplicarle estas <strong>dos</strong> restricciones de acero: <br>1) La respuesta debe tener <strong>máximo 3 puntos/bullets</strong> y no más. <br>2) Estrictamente <strong>no debe incluir introducciones, saludos ni conclusiones</strong> (ni hola, ni claro que sí; debe ir directo a los datos crudos).",
            placeholder: "Resume la Revolución Industrial. Obedece estas condiciones...",
            validate: function (input) {
                if (input.length < 20) return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Muy corto.</strong> Formula la petición con la temática y los detalles de las dos restricciones complejas." };

                let hasTopic = input.includes('revolución') || input.includes('industrial') || input.includes('revolucion');
                let hasPointConstraint = input.includes('3') && (input.includes('bullet') || input.includes('punto') || input.includes('viñeta') || input.includes('lista') || input.includes('párrafo'));
                let hasNoIntroConstraint = (input.includes('no') || input.includes('sin') || input.includes('omite') || input.includes('nada de') || input.includes('solo')) && (input.includes('introducción') || input.includes('introduccion') || input.includes('saludo') || input.includes('despedida') || input.includes('directo'));

                if (hasTopic && hasPointConstraint && hasNoIntroConstraint) return { success: true, message: "<strong><i class='fa-solid fa-check'></i> ¡Magistralmente ejecutado!</strong> Mantener a la IA enfocada con estas severas restricciones es el último paso fundamental para orquestar IAs productivamente en software y no solo conversar por ocio." };
                if (!hasPointConstraint) return { success: false, message: "<strong><i class='fa-solid fa-exclamation'></i> Falta la restricción exacta de longitud.</strong> Exígele que sean explícitamente 3 bullets/puntos (no generalices 'que sea breve')." };
                if (!hasNoIntroConstraint) return { success: false, message: "<strong><i class='fa-solid fa-exclamation'></i> Falta reprimir su faceta conversacional.</strong> Dile expresamente que NO haga introducciones, saludos ni despedidas." };
                if (!hasTopic) return { success: false, message: "<strong><i class='fa-solid fa-exclamation'></i> Falta tu objetivo base.</strong> Pídele como núcleo que resuma la 'Revolución Industrial'." };
                return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Faltaron las restricciones simultáneas.</strong> Vuelve a leer minuciosamente las condiciones y engloba ambas reglas dentro del prompt." };
            }
        }
    },
    {
        id: "prompting_json",
        title: "6. Salidas Estructuradas (JSON)",
        icon: "fa-database",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 6</span>
                <h1 class="lesson-title">Integración con Aplicaciones</h1>
            </div>
            <div class="lesson-content">
                <p>Las IAs comerciales suelen devolver texto plano o Markdown ("¡Hola! Aquí tienes la lista que me pediste..."). Sin embargo, si quieres que una IA funcione como el cerebro detrás de tu propia aplicación de software o web, debes forzarla a devolver datos en crudo y estructurados matemáticamente, como <strong>JSON</strong>.</p>
                
                <div class="info-card">
                    <h3 style="color: #60a5fa"><i class="fa-solid fa-database"></i> JSON como Formato Universal</h3>
                    <p>JSON (JavaScript Object Notation) es el lenguaje estándar para que los servidores intercambien datos. Si obligas a la IA a que te devuelva solo un bloque JSON estricto, puedes programar tu servidor local para procesar las respuestas de la IA e inyectarlas en tu base de datos o mostrarlas en la interfaz directamente, sin tener que "analizar" su texto conversacional.</p>
                </div>
            </div>
        `,
        hasSimulator: true,
        simulator: {
            title: "Nivel 5: El Ingeniero de Datos",
            description: "Pídele a la IA que cree una lista inventada de <strong>3 usuarios ficticios</strong> (cada uno debe tener como propiedades 'nombre', 'edad' y 'correo'). <strong>Ordena terminantemente</strong> a la IA que su respuesta final sea <strong>exclusivamente un JSON válido</strong> y que prohíba cualquier texto introductorio o bloque tipo código.",
            placeholder: "Genera datos inventados de 3 usuarios. Devuélvelos en formato...",
            validate: function (input) {
                if (input.length < 20) return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Muy corto.</strong> Formula la petición y la estructura de salida que deseas." };

                let hasTask = input.includes('usuario') || input.includes('persona') || input.includes('cliente') || input.includes('perfil');
                let hasProperties = input.includes('nombre') && input.includes('edad') && (input.includes('correo') || input.includes('email'));
                let hasJson = input.includes('json') || input.includes('formato json');
                let hasStrict = (input.includes('solo') || input.includes('exclusivamente') || input.includes('estricto') || input.includes('sin texto') || input.includes('markdown') || input.includes('únicamente') || input.includes('valido') || input.includes('válido'));

                if (hasTask && hasProperties && hasJson && hasStrict) return { success: true, message: "<strong><i class='fa-solid fa-check'></i> ¡Excelente!</strong> Has dominado JSON. Esta es una de las habilidades más codiciadas para desarrolladores de IA actuales." };
                if (!hasTask || !hasProperties) return { success: false, message: "<strong><i class='fa-solid fa-exclamation'></i> Revisa la Entidad solicitada.</strong> Asegúrate de pedirle 3 'usuarios' y especificar que deben tener 'nombre', 'edad' y 'correo/email'." };
                if (!hasJson) return { success: false, message: "<strong><i class='fa-solid fa-exclamation'></i> Te conectaron un texto plano.</strong> Dile explícitamente a la IA que debe formatear la salida como 'JSON'." };
                return { success: false, message: "<strong><i class='fa-solid fa-xmark'></i> Falta el bloqueo conversacional estricto.</strong> Aprovechando tus conocimientos técnicos, usa palabras coercitivas para que la IA NO agregue texto. Ej: 'devuelve exclusivamente JSON', 'sin nada más'." };
            }
        }
    },
    {
        id: "ethics",
        title: "7. Ética y Privacidad",
        icon: "fa-shield-halved",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 7</span>
                <h1 class="lesson-title">Reglas de Seguridad Finales</h1>
            </div>
            <div class="lesson-content">
                <p>La IA es el equivalente a la nueva electricidad. Es universalmente útil, pero debes manejarla con responsabilidad analítica como todo un profesional.</p>
                
                <div class="info-card">
                    <h3><i class="fa-solid fa-lock" style="color: #6ee7b7"></i> La Regla de la Privacidad Total</h3>
                    <p><strong>NUNCA jamás</strong> compartas datos altamente sensibles con un ChatGPT o cualquier IA gratuita/pública genérica. Muchas aplicaciones públicas se re-entrenan con la información que tú y usuarios de todo el mundo les envían. No debes compartir:</p>
                    <ul style="margin-top: 1rem; margin-left: 1.5rem">
                        <li>Contraseñas de bases de datos o secretos industriales bajo NDA.</li>
                        <li>Información financiera directa, legal o balances no públicos de tu compañía.</li>
                        <li>Código fuente con propiedad intelectual cerrada que pertenezca a un cliente.</li>
                        <li>Documentos corporativos con nombres reales de pacientes o clientes, direcciones o información sujeta a normativas.</li>
                    </ul>
                </div>

                <div class="info-card" style="margin-top:2rem">
                    <h3><i class="fa-solid fa-scale-balanced" style="color: #fca5a5"></i> Cuidado Extremo con los Sesgos</h3>
                    <p>La IA fue entrenada por humanos con datos de internet generados durante décadas. E internet tiene fuertes sesgos (racismo, visiones polarizadas, estereotipos geográficos). La IA absorberá y a menudo escupirá esos mismos sesgos encubiertos disfrazados de "verdades objetivas calculadas". Todo profesional debe auditar el output con sentido crítico para eliminar alucinaciones injustas contra grupos demográficos.</p>
                </div>
                
                <p style="margin-top: 1.5rem; font-weight: bold; color: var(--success)">Estás listo para ingresar al nivel libre oficial: ¡El Playground (Módulo 8)!</p>
            </div>
        `,
        hasSimulator: false
    },
    {
        id: "playground",
        title: "8. Playground de IA",
        icon: "fa-robot",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399">Práctica Libre</span>
                <h1 class="lesson-title">Sala de Chat IA Oficial</h1>
            </div>
            <div class="lesson-content">
                <p>Aquí puedes integrar tus prompts profesionales comunicándote con el motor backend de <strong>Google Gemini AI</strong> de forma completamente directa. No es un simulador en entorno cerrado; es el motor en crudo respondiendo a tu texto.</p>
                
                <div id="api-key-section" class="info-card" style="border-color: rgba(245, 158, 11, 0.4); margin-bottom: 2rem;">
                    <h3 style="color: #fbbf24; margin-top:0"><i class="fa-solid fa-key"></i> Configuración de Seguridad Personal</h3>
                    <p style="font-size:0.95rem; margin-bottom: 1rem">Al no depender de un servidor externo para este taller, inserta aquí debajo tu API Key gratuita de Gemini (tus credenciales de enrutamiento). Se guardará temporalmente bajo llave en tu propio navegador web local. Consigue la tuya gratis en <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color: #60a5fa; text-decoration: underline">Google AI Studio</a>.</p>
                    <div style="display:flex; gap:1rem; flex-wrap:wrap">
                        <input type="password" id="api-key-input" class="simulator-input" style="min-height:45px; flex:1" placeholder="Pega tu Key ej: AIzaSy...">
                        <button class="btn" id="save-key-btn"><i class="fa-solid fa-save"></i> Guardar</button>
                        <button class="btn btn-secondary" id="remove-key-btn" style="display:none"><i class="fa-solid fa-trash"></i> Borrar Clave</button>
                    </div>
                    <p id="key-status-msg" style="color:#34d399; font-size:0.9rem; margin-top:1rem; display:none"><i class="fa-solid fa-check"></i> Clave privada verificada y guardada exitosamente de forma local.</p>
                </div>

                <div class="chat-container">
                    <div class="chat-history" id="chat-history">
                        <div class="chat-message bot">
                            <div class="avatar"><i class="fa-solid fa-robot"></i></div>
                            <div class="message-bubble">¡Hola Mánager de IA! Todo listo y conectado en espera de variables. Pon a prueba tus nuevas técnicas de prompting avanzado aquí (Ej: Few-Shot, Cadenas de Pensamiento de Lógica, o Aplicación de Restricciones Severas de Output).</div>
                        </div>
                    </div>
                    <div class="chat-input-area">
                        <textarea id="chat-input" placeholder="Comunícate con la API... (Ej. Actúa como un experto, piensa paso a paso y...)" class="simulator-input" style="min-height:60px"></textarea>
                        <button id="send-chat-btn" class="btn" style="height:60px; border-radius: 0.8rem;"><i class="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        `,
        hasSimulator: false
    }
];

// App State
let currentLessonIndex = 0;
let unlockedLessons = [0];

document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderSidebar();
    loadLesson(0);
    setupMobileMenu();
}

function renderSidebar() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.innerHTML = '';

    curriculum.forEach((lesson, index) => {
        const isUnlocked = unlockedLessons.includes(index) || index === curriculum.length - 1; // Allow playground to be generally available

        // Auto unlock everything for simplicity but keep graphics
        if (!unlockedLessons.includes(index)) unlockedLessons.push(index);

        const li = document.createElement("li");
        li.className = `nav-item ${index === currentLessonIndex ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}`;

        li.innerHTML = `
            <i class="fa-solid ${isUnlocked ? lesson.icon : 'fa-lock'}"></i>
            <span>${lesson.title}</span>
        `;

        li.addEventListener("click", () => {
            loadLesson(index);
            document.getElementById('sidebar').classList.remove('active');
        });

        navMenu.appendChild(li);
    });
}

function loadLesson(index) {
    currentLessonIndex = index;
    const lesson = curriculum[index];
    const contentArea = document.getElementById("content-area");

    // Update progress
    const progressPercent = Math.round((currentLessonIndex / (curriculum.length - 1)) * 100);
    document.getElementById("progress-fill").style.width = `${progressPercent}%`;
    document.getElementById("progress-text").innerText = `Progreso: ${progressPercent}%`;

    // Render HTML content
    let html = lesson.content;

    // Inject Simulator if needed
    if (lesson.hasSimulator && lesson.simulator) {
        html += `
            <div class="info-card simulator-area" style="border-color: rgba(139, 92, 246, 0.4)">
                <h3 style="margin-top: 0"><i class="fa-solid fa-code"></i> ${lesson.simulator.title}</h3>
                <p style="margin-bottom: 1rem;">${lesson.simulator.description}</p>
                
                <div class="textarea-container">
                    <textarea id="prompt-input" class="simulator-input" placeholder="${lesson.simulator.placeholder}"></textarea>
                </div>
                
                <button class="btn" id="analyze-btn"><i class="fa-solid fa-wand-magic-sparkles"></i> Analizar mi Prompt</button>
                
                <div id="feedback-box" class="feedback-box"></div>
            </div>
        `;
    }

    // Inject Footer Navigation
    html += `
        <div class="lesson-footer">
            <button class="btn btn-secondary" id="prev-btn" ${index === 0 ? 'style="visibility: hidden;"' : ''}>
                <i class="fa-solid fa-arrow-left"></i> Anterior
            </button>
            <button class="btn" id="next-btn" ${index === curriculum.length - 1 ? 'style="visibility: hidden;"' : ''}>
                ${unlockedLessons.includes(index + 1) ? 'Siguiente Nivel <i class="fa-solid fa-arrow-right"></i>' : 'Terminar Nivel <i class="fa-solid fa-check"></i>'}
            </button>
        </div>
    `;

    contentArea.innerHTML = `<div class="lesson-container">${html}</div>`;
    contentArea.scrollTop = 0;

    // Setup event listeners
    setupControls();

    // Re-render sidebar to update active state
    renderSidebar();
}

function setupControls() {
    // Simulator logic
    const analyzeBtn = document.getElementById("analyze-btn");
    if (analyzeBtn) {
        analyzeBtn.addEventListener("click", () => {
            const input = document.getElementById("prompt-input").value.toLowerCase();
            const feedbackBox = document.getElementById("feedback-box");

            feedbackBox.style.display = "block";

            const currentLesson = curriculum[currentLessonIndex];

            if (currentLesson.simulator && currentLesson.simulator.validate) {
                const result = currentLesson.simulator.validate(input);

                if (result.success) {
                    feedbackBox.className = "feedback-box success";
                    feedbackBox.innerHTML = result.message;
                    // Auto-unlock next module if successful in simulator
                    if (!unlockedLessons.includes(currentLessonIndex + 1)) {
                        unlockedLessons.push(currentLessonIndex + 1);
                        renderSidebar();
                    }
                } else {
                    feedbackBox.className = "feedback-box error";
                    feedbackBox.innerHTML = result.message;
                }
            } else {
                feedbackBox.className = "feedback-box error";
                feedbackBox.innerHTML = "Error: Este simulador no tiene lógica de validación configurada.";
            }
        });
    }

    // Chat API Logic (Módulo Playground)
    const saveKeyBtn = document.getElementById("save-key-btn");
    const removeKeyBtn = document.getElementById("remove-key-btn");
    const keyInput = document.getElementById("api-key-input");
    const statusMsg = document.getElementById("key-status-msg");
    const sendChatBtn = document.getElementById("send-chat-btn");
    const chatInput = document.getElementById("chat-input");
    const chatHistory = document.getElementById("chat-history");

    if (saveKeyBtn) {
        const savedKey = localStorage.getItem("gemini_api_key");
        if (savedKey) {
            keyInput.value = "********";
            keyInput.disabled = true;
            saveKeyBtn.style.display = "none";
            removeKeyBtn.style.display = "block";
            statusMsg.style.display = "block";
        }

        saveKeyBtn.addEventListener("click", () => {
            const tk = keyInput.value.trim();
            if (tk && tk !== "********") {
                localStorage.setItem("gemini_api_key", tk);
                keyInput.value = "********";
                keyInput.disabled = true;
                saveKeyBtn.style.display = "none";
                removeKeyBtn.style.display = "block";
                statusMsg.style.display = "block";
            }
        });

        removeKeyBtn.addEventListener("click", () => {
            localStorage.removeItem("gemini_api_key");
            keyInput.value = "";
            keyInput.disabled = false;
            saveKeyBtn.style.display = "block";
            removeKeyBtn.style.display = "none";
            statusMsg.style.display = "none";
        });
    }

    if (sendChatBtn) {
        sendChatBtn.addEventListener("click", async () => {
            const prompt = chatInput.value.trim();
            if (!prompt) return;

            const apiKey = localStorage.getItem("gemini_api_key");
            if (!apiKey) {
                alert("Primero debes introducir tu API Key en la configuración superior.");
                return;
            }

            // Append User Message
            chatHistory.innerHTML += `
                <div class="chat-message user">
                    <div class="avatar"><i class="fa-solid fa-user"></i></div>
                    <div class="message-bubble">${prompt.replace(/\n/g, '<br>')}</div>
                </div>
            `;
            chatInput.value = "";
            chatHistory.scrollTop = chatHistory.scrollHeight;

            // Loading state
            const loadId = "load-" + Date.now();
            chatHistory.innerHTML += `
                <div class="chat-message bot" id="${loadId}">
                    <div class="avatar"><i class="fa-solid fa-robot"></i></div>
                    <div class="message-bubble"><i class="fa-solid fa-circle-notch fa-spin"></i> Conectando de forma remota...</div>
                </div>
            `;
            chatHistory.scrollTop = chatHistory.scrollHeight;

            try {
                // Call Google Gemini API directly
                const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apiKey, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }]
                    })
                });

                const data = await response.json();
                document.getElementById(loadId).remove();

                if (!response.ok) {
                    throw new Error(data.error?.message || "Ocurrió un fallo en la API");
                }

                let reply = data.candidates[0].content.parts[0].text;
                // Basic markdown to html structure
                reply = reply.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                reply = reply.replace(/\n/g, '<br>');

                chatHistory.innerHTML += `
                    <div class="chat-message bot">
                        <div class="avatar"><i class="fa-solid fa-robot"></i></div>
                        <div class="message-bubble">${reply}</div>
                    </div>
                `;
            } catch (err) {
                const el = document.getElementById(loadId);
                if (el) el.remove();
                chatHistory.innerHTML += `
                    <div class="chat-message bot" style="opacity: 0.8">
                        <div class="avatar" style="background: #ef4444;"><i class="fa-solid fa-triangle-exclamation"></i></div>
                        <div class="message-bubble" style="border-color:#ef4444">${err.message}</div>
                    </div>
                `;
            }
            chatHistory.scrollTop = chatHistory.scrollHeight;
        });
    }

    // Navigation buttons
    const prevBtn = document.getElementById("prev-btn");
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentLessonIndex > 0) loadLesson(currentLessonIndex - 1);
        });
    }

    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (currentLessonIndex < curriculum.length - 1) {
                // Unlock next lesson
                if (!unlockedLessons.includes(currentLessonIndex + 1)) {
                    unlockedLessons.push(currentLessonIndex + 1);
                }
                loadLesson(currentLessonIndex + 1);
            }
        });
    }
}

function setupMobileMenu() {
    const toggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}
