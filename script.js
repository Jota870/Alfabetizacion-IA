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
        hasSimulator: false
    },
    {
        id: "prompting_advanced",
        title: "3. Técnicas Avanzadas",
        icon: "fa-vial",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 3</span>
                <h1 class="lesson-title">Trucos Ninja para IA</h1>
            </div>
            <div class="lesson-content">
                <p>Una vez que sabes la estructura básica, es hora de llevar la IA al límite para tareas súper complejas.</p>
                
                <div class="info-card" style="margin-bottom: 1.5rem;">
                    <h3 style="color: #60a5fa"><i class="fa-solid fa-list-ol"></i> Truco 1: Piensa Paso a Paso</h3>
                    <p>Las IA en ocasiones se equivocan en matemáticas o lógica pura porque responden demasiado rápido. Si añades la frase mágica: <strong><em>"Piensa paso a paso y explica tu razonamiento antes de dar el resultado"</em></strong>, la IA usará los primeros párrafos para crear un plan lógico y se auto-corregirá, reduciendo un 80% sus errores lógicos.</p>
                </div>

                <div class="info-card" style="border-color: rgba(16, 185, 129, 0.4);">
                    <h3 style="color: #34d399"><i class="fa-solid fa-clone"></i> Truco 2: Dar Ejemplos (Few-Shot)</h3>
                    <p>En lugar de decirle reglas matemáticas complejas para que evalúe, solo dale algunos ejemplos de cómo de comportaría el sistema. Las IAs aprenden mejor imitando por contexto ("Few-Shot Prompting"):</p>
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
        hasSimulator: true
    },
    {
        id: "ethics",
        title: "4. Ética y Privacidad",
        icon: "fa-shield-halved",
        content: `
            <div class="lesson-header">
                <span class="lesson-badge">Módulo 4</span>
                <h1 class="lesson-title">Reglas de Seguridad Finales</h1>
            </div>
            <div class="lesson-content">
                <p>La IA es el equivalente a la nueva electricidad. Es increíblemente útil, pero debes manejarla con responsabilidad profesional.</p>
                
                <div class="info-card">
                    <h3><i class="fa-solid fa-lock" style="color: #6ee7b7"></i> La Regla de la Privacidad Total</h3>
                    <p><strong>NUNCA</strong> compartas datos sensibles con un ChatGPT o cualquier IA gratuita/pública. Las aplicaciones públicas se entrenan con la información que tú les envías. No debes compartir:</p>
                    <ul style="margin-top: 1rem; margin-left: 1.5rem">
                        <li>Contraseñas de bases de datos o secretos industriales.</li>
                        <li>Información financiera directa de tu compañía.</li>
                        <li>Código fuente con propiedad intelectual cerrada que pertenezca a un cliente confidencial.</li>
                        <li>Documentos con nombres de pacientes, números de identidad, direcciones o información privada.</li>
                    </ul>
                </div>

                <div class="info-card" style="margin-top:2rem">
                    <h3><i class="fa-solid fa-scale-balanced" style="color: #fca5a5"></i> Cuidado con los Sesgos</h3>
                    <p>La IA fue entrenada por humanos con datos de internet. Internet tiene sesgos (racismo, sexismo, estereotipos culturales). La IA absorberá y a menudo escupirá esos mismos sesgos disfrazados como verdades objetivas. Siempre revisa las respuestas con sentido crítico.</p>
                </div>

                <div style="text-align: center; margin-top: 3rem; background: linear-gradient(to right, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.1)); padding: 2rem; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.2)">
                    <h2 style="color: #f8fafc; font-size:2rem; margin-bottom: 0.5rem"><i class="fa-solid fa-trophy text-warning"></i> ¡Curso Finalizado!</h2>
                    <p>Has completado todos los niveles desde cero hasta avanzado. Eres oficialmente un experto dominando las herramientas y comprendiendo sus riesgos.</p>
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
        const isUnlocked = unlockedLessons.includes(index);
        
        const li = document.createElement("li");
        li.className = \`nav-item \${index === currentLessonIndex ? 'active' : ''} \${!isUnlocked ? 'locked' : ''}\`;
        
        li.innerHTML = \`
            <i class="fa-solid \${isUnlocked ? lesson.icon : 'fa-lock'}"></i>
            <span>\${lesson.title}</span>
        \`;
        
        if (isUnlocked) {
            li.addEventListener("click", () => {
                loadLesson(index);
                document.getElementById('sidebar').classList.remove('active');
            });
        }
        
        navMenu.appendChild(li);
    });
}

function loadLesson(index) {
    currentLessonIndex = index;
    const lesson = curriculum[index];
    const contentArea = document.getElementById("content-area");
    
    // Update progress
    const progressPercent = Math.round((currentLessonIndex / (curriculum.length - 1)) * 100);
    document.getElementById("progress-fill").style.width = \`\${progressPercent}%\`;
    document.getElementById("progress-text").innerText = \`Progreso: \${progressPercent}%\`;

    // Render HTML content
    let html = lesson.content;

    // Inject Simulator if needed
    if(lesson.hasSimulator) {
        html += \`
            <div class="info-card simulator-area" style="border-color: rgba(139, 92, 246, 0.4)">
                <h3 style="margin-top: 0"><i class="fa-solid fa-code"></i> Tu Turno: Máster Simulador</h3>
                <p style="margin-bottom: 1rem;">Escribe un prompt pidiéndole a la IA que te ayude a crear una <strong>rutina de ejercicios de 15 minutos</strong> en casa. ¡Usa todo lo que aprendiste! Busca definir un rol, formato y tarea.</p>
                
                <div class="textarea-container">
                    <textarea id="prompt-input" class="simulator-input" placeholder="Ejemplo: Actúa como un personal trainer..."></textarea>
                </div>
                
                <button class="btn" id="analyze-btn"><i class="fa-solid fa-wand-magic-sparkles"></i> Analizar mi Prompt</button>
                
                <div id="feedback-box" class="feedback-box"></div>
            </div>
        \`;
    }

    // Inject Footer Navigation
    html += \`
        <div class="lesson-footer">
            <button class="btn btn-secondary" id="prev-btn" \${index === 0 ? 'style="visibility: hidden;"' : ''}>
                <i class="fa-solid fa-arrow-left"></i> Anterior
            </button>
            <button class="btn" id="next-btn" \${index === curriculum.length - 1 ? 'style="visibility: hidden;"' : ''}>
                \${unlockedLessons.includes(index + 1) ? 'Siguiente <i class="fa-solid fa-arrow-right"></i>' : 'Terminar Nivel <i class="fa-solid fa-check"></i>'}
            </button>
        </div>
    \`;

    contentArea.innerHTML = \`<div class="lesson-container">\${html}</div>\`;
    contentArea.scrollTop = 0;

    // Setup event listeners
    setupControls();
    
    // Re-render sidebar to update active state
    renderSidebar();
}

function setupControls() {
    // Simulator logic
    const analyzeBtn = document.getElementById("analyze-btn");
    if(analyzeBtn) {
        analyzeBtn.addEventListener("click", () => {
            const input = document.getElementById("prompt-input").value.toLowerCase();
            const feedbackBox = document.getElementById("feedback-box");
            
            feedbackBox.style.display = "block";
            
            if (input.length < 20) {
                feedbackBox.className = "feedback-box error";
                feedbackBox.innerHTML = "<strong><i class='fa-solid fa-xmark'></i> Muy corto.</strong> Un buen prompt suele ser específico y descriptivo. Agrega más detalles.";
                return;
            }

            let hasContext = (input.includes('actúa') || input.includes('eres') || input.includes('como un') || input.includes('entrenador') || input.includes('experto'));
            let hasFormat = (input.includes('formato') || input.includes('lista') || input.includes('tabla') || input.includes('viñetas') || input.includes('bullet') || input.includes('rutina'));

            if (hasContext && hasFormat) {
                feedbackBox.className = "feedback-box success";
                feedbackBox.innerHTML = "<strong><i class='fa-solid fa-check'></i> ¡Excelente!</strong> Has incluido contexto (un rol) y le has pedido un formato específico. Este es un Prompt de alto nivel digno de continuar al siguiente módulo.";
                // Auto-unlock next module if successful in simulator
                if (!unlockedLessons.includes(currentLessonIndex + 1)) {
                    unlockedLessons.push(currentLessonIndex + 1);
                    renderSidebar();
                }
            } else if (hasContext) {
                feedbackBox.className = "feedback-box error";
                feedbackBox.innerHTML = "<strong><i class='fa-solid fa-exclamation'></i> Te falta definir el Formato.</strong> Tienes buen contexto o rol para la IA, pero intenta especificarle CÓMO quieres visualizar la respuesta (ej. 'hazlo en formato de tabla').";
            } else if (hasFormat) {
                feedbackBox.className = "feedback-box error";
                feedbackBox.innerHTML = "<strong><i class='fa-solid fa-exclamation'></i> Te falta definir el Rol/Contexto.</strong> Tienes el formato, pero deberías decirle quién debe ser la IA (ej. 'Actúa como un preparador físico').";
            } else {
                feedbackBox.className = "feedback-box error";
                feedbackBox.innerHTML = "<strong><i class='fa-solid fa-xmark'></i> Aún falta detalle.</strong> Intenta asignarle explícitamente un ROL/CONTEXTO a la IA y definir un FORMATO esperado según tus conocimientos de la Fórmula de Oro.";
            }
        });
    }

    // Navigation buttons
    const prevBtn = document.getElementById("prev-btn");
    if(prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentLessonIndex > 0) loadLesson(currentLessonIndex - 1);
        });
    }

    const nextBtn = document.getElementById("next-btn");
    if(nextBtn) {
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
