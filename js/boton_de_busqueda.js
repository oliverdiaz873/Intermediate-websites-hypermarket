document.addEventListener("DOMContentLoaded", function() {

    const btnBuscar = document.getElementById("btn-buscar");
    const inputBuscar = document.getElementById("input-buscar");
    const resultados = document.getElementById("resultados-busqueda");
    const body = document.body;

    const productos = [

        //--Sección Alimentos--//

        // bebidas
        { nombre: "Coca Cola", url: "productos/Alimentos/bebidas/coca_cola.html" },
        { nombre: "Country Club Frambuesa", url: "productos/Alimentos/bebidas/country_club_frambuesa.html" },
        { nombre: "Country Club Uva", url: "productos/Alimentos/bebidas/country_club_uva.html" },
        { nombre: "Gatorade Uva", url: "productos/Alimentos/bebidas/gatorade_uva.html" },
        { nombre: "Jugo de Naranja Rica", url: "productos/Alimentos/bebidas/jugo_naranja_rica.html" },
        { nombre: "Jugo de Pera Santal", url: "productos/Alimentos/bebidas/jugo_pera_santal.html" },
        { nombre: "Red Bull", url: "productos/Alimentos/bebidas/red_bull.html" },
        
        // carnes, pescados y mariscos
        { nombre: "Camarones Crudos", url: "productos/Alimentos/carnes_pescados_y_mariscos/camarones_crudos.html" },
        { nombre: "Camarones Pre-cocidos", url: "productos/Alimentos/carnes_pescados_y_mariscos/camarones_precocidos.html" },
        { nombre: "Carne de Res para Hamburguesas", url: "productos/Alimentos/carnes_pescados_y_mariscos/carne_de_res_para_hamburguesas.html" },
        { nombre: "Chuleta de Cerdo", url: "productos/Alimentos/carnes_pescados_y_mariscos/chuleta_de_cerdo.html" },
        { nombre: "Pollo Entero Don Pollo", url: "productos/Alimentos/carnes_pescados_y_mariscos/pollo_entero_don_pollo.html" },
        { nombre: "Tilapia Roja", url: "productos/Alimentos/carnes_pescados_y_mariscos/tilapia_roja.html" },
        
        //Despensa
        { nombre: "Aceite Crisol", url: "productos/Alimentos/despensa/aceite_crisol.html" },
        { nombre: "Aceite de Oliva Extra Virgen", url: "productos/Alimentos/despensa/aceite_oliva_extra_virgen.html" },
        { nombre: "Mayonesa Baldom", url: "productos/Alimentos/despensa/mayonesa_baldom.html" },
        { nombre: "Sal Marina Refisal", url: "productos/Alimentos/despensa/sal_refisal.html" },
        { nombre: "Sazón Completo Maggi", url: "productos/Alimentos/despensa/sazon_completo_maggi.html" },
        { nombre: "Sopita Doña Gallina", url: "productos/Alimentos/despensa/sopita_dona_gallina.html" },
        { nombre: "Vinagre Baldom", url: "productos/Alimentos/despensa/vinagre_baldom.html" },

        //Enlatados
        { nombre: "Atún Dimar", url: "productos/Alimentos/enlatados/atun_dimar.html" },
        { nombre: "Gandules Verdes Goya", url: "productos/Alimentos/enlatados/gandules_verdes_goya.html" },
        { nombre: "Habichuelas Negras Goya", url: "productos/Alimentos/enlatados/habichuelas_negras_goya.html" },
        { nombre: "Maíz La Famosa", url: "productos/Alimentos/enlatados/maiz_la_famosa.html" },
        { nombre: "Salchichas Jajá", url: "productos/Alimentos/enlatados/salchichas_jaja.html" },
        { nombre: "Sardinas Gord", url: "productos/Alimentos/enlatados/sardinas_gord.html" },
        { nombre: "Tomates Pelados La Famosa", url: "productos/Alimentos/enlatados/tomates_pelados_la_famosa.html" },

        //Frutas y verduras
        { nombre: "Ajíes Morrones", url: "productos/Alimentos/Frutas_y_verduras/ajies_morrones.html" },
        { nombre: "Cebollas Rojas", url: "productos/Alimentos/Frutas_y_verduras/cebollas_rojas.html" },
        { nombre: "Limones Persa", url: "productos/Alimentos/Frutas_y_verduras/limones_persa.html" },
        { nombre: "Mandarinas", url: "productos/Alimentos/Frutas_y_verduras/mandarinas.html" },
        { nombre: "Manzanas Amarillas", url: "productos/Alimentos/Frutas_y_verduras/manzanas_amarillas.html" },
        { nombre: "Manzanas Rojas", url: "productos/Alimentos/Frutas_y_verduras/manzanas_rojas.html" },
        { nombre: "Manzanas Verdes", url: "productos/Alimentos/Frutas_y_verduras/manzanas_verdes.html" },
        { nombre: "Paquete de Fresas", url: "productos/Alimentos/Frutas_y_verduras/paquete_de_fresas.html" },
        { nombre: "Pepinos", url: "productos/Alimentos/Frutas_y_verduras/pepinos.html" },
        { nombre: "Tomates de Ensalada", url: "productos/Alimentos/Frutas_y_verduras/tomates_de_ensalada.html" },
        { nombre: "Uvas Moradas", url: "productos/Alimentos/Frutas_y_verduras/uvas_moradas.html" },
        { nombre: "Zanahorias", url: "productos/Alimentos/Frutas_y_verduras/zanahorias.html" },

        //Lácteos y huevos
        { nombre: "Huevos Don Pancho", url: "productos/Alimentos/lacteos_y_huevos/huevos.html" },
        { nombre: "Leche Entera Rica", url: "productos/Alimentos/lacteos_y_huevos/leche_entera_rica.html" },
        { nombre: "Queso Gorgonzola", url: "productos/Alimentos/lacteos_y_huevos/queso_gorgonzola.html" },
        { nombre: "Queso Gouda", url: "productos/Alimentos/lacteos_y_huevos/queso_gouda.html" },
        { nombre: "Yogurt de Fresa Yoka", url: "productos/Alimentos/lacteos_y_huevos/yogurt_fresa_yoka.html" },
        { nombre: "Yogurt Natural Rica", url: "productos/Alimentos/lacteos_y_huevos/yogurt_natural_rica.html" },

        //--Electrodomésticos--//

        //Climatización
        { nombre: "Aire Acondicionado Tecnomaster", url: "productos/electrodomesticos/climatizacion/aire_acondicionado_tecnomaster.html" },
        { nombre: "Aire Acondicionado Whirlpool", url: "productos/electrodomesticos/climatizacion/aire_acondicionado_whirlpool.html" },
        { nombre: "Ventilador Daiwa", url: "productos/electrodomesticos/climatizacion/ventilador_daiwa.html" },
        { nombre: "Ventilador KDK", url: "productos/electrodomesticos/climatizacion/ventilador_kdk.html" },
        { nombre: "Ventilador Pequeño", url: "productos/electrodomesticos/climatizacion/ventilador_pequeno.html" },
        { nombre: "Ventilador de Techo KDK", url: "productos/electrodomesticos/climatizacion/ventilador_techo_kdk.html" },





    ];


    // ---------------- Mostrar / Ocultar input ----------------
    btnBuscar.addEventListener("click", function() {
        body.classList.toggle("menu-busqueda-activa"); // alterna clase
        if (body.classList.contains("menu-busqueda-activa")) {
            inputBuscar.focus();
        } else {
            resultados.style.display = "none";
            inputBuscar.value = "";
        }
    });

    // ---------------- Cerrar con Escape ----------------
    inputBuscar.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            body.classList.remove("menu-busqueda-activa");
            resultados.style.display = "none";
            inputBuscar.value = "";
            btnBuscar.focus();
        }
    });

    // ---------------- Autocompletado ----------------
   inputBuscar.addEventListener("input", function () {
    const valor = normalizarTexto(inputBuscar.value);
    resultados.innerHTML = "";

    if (valor.length === 0) {
        resultados.style.display = "none";
        return;
    }

    const coincidencias = productos.filter(prod =>
        normalizarTexto(prod.nombre).includes(valor)
    );

    if (coincidencias.length === 0) {
        resultados.style.display = "none";
        return;
    }

    coincidencias.forEach(prod => {
        const li = document.createElement("li");
        li.textContent = prod.nombre;
        li.addEventListener("click", function () {
            window.location.href = prod.url;
        });
        resultados.appendChild(li);
    });

    resultados.style.display = "block";
});

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")                 // separa letras y acentos
        .replace(/[\u0300-\u036f]/g, ""); // elimina los acentos
}



    // ---------------- Cerrar resultados al hacer clic fuera ----------------
    document.addEventListener("click", function(e) {
        if (!inputBuscar.contains(e.target) && !btnBuscar.contains(e.target)) {
            resultados.style.display = "none";
        }
    });

});
