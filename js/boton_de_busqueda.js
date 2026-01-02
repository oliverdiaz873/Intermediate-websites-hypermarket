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

        //Cocina
        { nombre: "Bebedero Tecnomaster", url: "productos/electrodomesticos/cocina/bebedero_tecnomaster.html" },
        { nombre: "Cilindro de gas Duragas", url: "productos/electrodomesticos/cocina/cilindro_duragas.html" },
        { nombre: "Estufa LG", url: "productos/electrodomesticos/cocina/estufa_lg.html" },
        { nombre: "Extractor de grasa Drija", url: "productos/electrodomesticos/cocina/extractor_drija.html" },
        { nombre: "Freezer 7 Pies", url: "productos/electrodomesticos/cocina/freezer_7_pies.html" },
        { nombre: "Nevera LG", url: "productos/electrodomesticos/cocina/nevera_lg.html" },

        //Lavado
        { nombre: "Lavadora Dimensions", url: "productos/electrodomesticos/lavado/lavadora_dimensions.html" },
        { nombre: "Lavadora Frigidaire", url: "productos/electrodomesticos/lavado/lavadora_frigidaire.html" },
        { nombre: "Lavadora LG", url: "productos/electrodomesticos/lavado/lavadora_lg.html" },
        { nombre: "Lavadora y Secadora LG", url: "productos/electrodomesticos/lavado/lavadora_secadora_lg.html" },
        { nombre: "Lavadora y Secadora Tecnomaster", url: "productos/electrodomesticos/lavado/lavadora_tecnomaster.html" },


        //--Farmacia--//

        //analgésicos
        { nombre: "Equate Analgésico", url: "productos/farmacia/analgesicos/equate_analgesico.html" },
        { nombre: "Flanax Analgésico", url: "productos/farmacia/analgesicos/flanax.html" },
        { nombre: "Thera-Gesic Analgésico", url: "productos/farmacia/analgesicos/thera_gesic.html" },
        { nombre: "Tylenol Analgésico", url: "productos/farmacia/analgesicos/tylenol.html" },
        { nombre: "Vaporizing Analgésico", url: "productos/farmacia/analgesicos/vaporizing.html" },

        //Antigripales y Resfriado
        { nombre: "Antiflu-Des", url: "productos/farmacia/antigripales_y_resfriado/antiflu_Des.html" },
        { nombre: "Coldyflu", url: "productos/farmacia/antigripales_y_resfriado/coldyflu.html" },
        { nombre: "Mucinex", url: "productos/farmacia/antigripales_y_resfriado/mucinex.html" },
        { nombre: "NyQuil", url: "productos/farmacia/antigripales_y_resfriado/nyquil.html" },
        { nombre: "Theraflu", url: "productos/farmacia/antigripales_y_resfriado/theraflu.html" },

        //Dermocosmética
        { nombre: "Cerave Ácido Hialurónico", url: "productos/farmacia/dermocosmetica/acido_hialuronico.html" },
        { nombre: "Hidratante Cerave", url: "productos/farmacia/dermocosmetica/hidratante_cerave.html" },
        { nombre: "Hidratante Eucerin", url: "productos/farmacia/dermocosmetica/hidratante_eucerin.html" },
        { nombre: "Hidratante Cerave Grande", url: "productos/farmacia/dermocosmetica/hidratante_grande.html" },
        { nombre: "Retinol", url: "productos/farmacia/dermocosmetica/retinol.html" },
        { nombre: "Serum Vitamina C", url: "productos/farmacia/dermocosmetica/serum_vitaminac.html" },

        //Vitaminas y Minerales
        { nombre: "Flintstones", url: "productos/farmacia/vitaminas_y_minerales/flintstones.html" },
        { nombre: "Multivitamínico", url: "productos/farmacia/vitaminas_y_minerales/multivitaminico.html" },
        { nombre: "Omega 3", url: "productos/farmacia/vitaminas_y_minerales/omega3.html" },
        { nombre: "Vitafusion", url: "productos/farmacia/vitaminas_y_minerales/vitafusion.html" },
        { nombre: "Vitamina C", url: "productos/farmacia/vitaminas_y_minerales/vitaminac.html" },

        //--Ferretería--//

        //Electricidad
        { nombre: "Bombillas LED", url: "productos/ferreteria/electricidad/bombillas_led.html" },
        { nombre: "Bombillas", url: "productos/ferreteria/electricidad/bombillas.html" },
        { nombre: "Extensión Eléctrica", url: "productos/ferreteria/electricidad/extension.html" },
        { nombre: "Linterna", url: "productos/ferreteria/electricidad/linterna.html" },
        { nombre: "Toma Corriente", url: "productos/ferreteria/electricidad/toma_corriente.html" },

        //Herramientas Manuales
        { nombre: "Destornillador", url: "productos/ferreteria/herramientas_manuales/destornillador.html" },
        { nombre: "Llave de Tuerca", url: "productos/ferreteria/herramientas_manuales/llave_de_tuerca.html" },
        { nombre: "Martillo", url: "productos/ferreteria/herramientas_manuales/martillo.html" },
        { nombre: "Pinza", url: "productos/ferreteria/herramientas_manuales/pinza.html" },
        { nombre: "Sierra de Mano", url: "productos/ferreteria/herramientas_manuales/sierra_de_mano.html" },

        //Pinturas y Acabados
        { nombre: "Brocha", url: "productos/ferreteria/pinturas_y_acabados/brocha.html" },
        { nombre: "Kit de Pintura", url: "productos/ferreteria/pinturas_y_acabados/kit_de_pintura.html" },
        { nombre: "Pinturas Tropical", url: "productos/ferreteria/pinturas_y_acabados/pinturas_tropical.html" },
        { nombre: "Pinturas Tucán", url: "productos/ferreteria/pinturas_y_acabados/pinturas_tucan.html" },
        { nombre: "Rodillo de Pintura", url: "productos/ferreteria/pinturas_y_acabados/rodillo_de_pintura.html" },

        //Plomería
        { nombre: "Grifo Moderno", url: "productos/ferreteria/plomeria/grifo_moderno.html" },
        { nombre: "Grifo", url: "productos/ferreteria/plomeria/grifo.html" },
        { nombre: "Manguera de Jardín", url: "productos/ferreteria/plomeria/manguera_de_jardin.html" },
        { nombre: "Manguera", url: "productos/ferreteria/plomeria/manguera.html" },
        { nombre: "Tubo de Drenaje", url: "productos/ferreteria/plomeria/tubo.html" },

        //--Juguetes--//

        //juguetes para niñas
        { nombre: "Muñeca Baby Doll", url: "productos/juguetes/juguetes_para_niñas/baby_doll.html" },
        { nombre: "Muñeca Barbie", url: "productos/juguetes/juguetes_para_niñas/barbie.html" },
        { nombre: "Juguetes de Peluquería", url: "productos/juguetes/juguetes_para_niñas/juguetes_peluqueria.html" },
        { nombre: "Kit de Maquillaje", url: "productos/juguetes/juguetes_para_niñas/kit_de_maquillaje.html" },
        { nombre: "Pinta Uñas", url: "productos/juguetes/juguetes_para_niñas/pinta_unas.html" },

        //juguetes para niños
        { nombre: "Auto Azul", url: "productos/juguetes/juguetes_para_niños/auto_azul.html" },
        { nombre: "Avión de Juguete", url: "productos/juguetes/juguetes_para_niños/avion_juguete.html" },
        { nombre: "Autos Hot Wheels", url: "productos/juguetes/juguetes_para_niños/hot_wheels.html" },
        { nombre: "Legos de Creeper", url: "productos/juguetes/juguetes_para_niños/legos_creeper.html" },
        { nombre: "Legos de Minecraft", url: "productos/juguetes/juguetes_para_niños/legos_minecraft.html" },
       
        //--Muebles y Decoración--//

        //Floreros
        { nombre: "Florero de Plantas", url: "productos/muebles_y_decoracion/floreros/florero_de_plantas.html" },
        { nombre: "Florero de Vidrio", url: "productos/muebles_y_decoracion/floreros/florero_de_vidrio.html" },
        { nombre: "Jarrón", url: "productos/muebles_y_decoracion/floreros/jarron.html" },
        { nombre: "Jarrones", url: "productos/muebles_y_decoracion/floreros/jarrones.html" },
        { nombre: "Tulipanes", url: "productos/muebles_y_decoracion/floreros/tulipanes.html" },
       
        //Mesas
        { nombre: "Mesa de Madera", url: "productos/muebles_y_decoracion/mesas/mesa_de_madera.html" },
        { nombre: "Mesa de Noche", url: "productos/muebles_y_decoracion/mesas/mesa_de_noche.html" },
        { nombre: "Mesa Moderna", url: "productos/muebles_y_decoracion/mesas/mesa_moderna.html" },
        { nombre: "Mesa Oscura", url: "productos/muebles_y_decoracion/mesas/mesa_oscura.html" },
        { nombre: "Mesa Pequeña", url: "productos/muebles_y_decoracion/mesas/mesa_pequena.html" },

        //Sillones
        { nombre: "Sillón Amarillo", url: "productos/muebles_y_decoracion/sillones/sillon_amarillo.html" },
        { nombre: "Sillón Azul", url: "productos/muebles_y_decoracion/sillones/sillon_azul.html" },
        { nombre: "Sillón Blanco", url: "productos/muebles_y_decoracion/sillones/sillon_blanco.html" },
        { nombre: "Sillón Gris", url: "productos/muebles_y_decoracion/sillones/sillon_gris.html" },
        { nombre: "Sillón Verde", url: "productos/muebles_y_decoracion/sillones/sillon_verde.html" },

        //Sofás
        { nombre: "Sofá Cama Blanco", url: "productos/muebles_y_decoracion/sofas/sofa_cama_blanco.html" },
        { nombre: "Sofá Gris", url: "productos/muebles_y_decoracion/sofas/sofa_gris.html" },
        { nombre: "Sofá Media Luna", url: "productos/muebles_y_decoracion/sofas/sofa_media_luna.html" },
        { nombre: "Sofá Negro", url: "productos/muebles_y_decoracion/sofas/sofa_negro.html" },
        { nombre: "Sofá Verde", url: "productos/muebles_y_decoracion/sofas/sofa_verde.html" },

        //--Ropa--//

       //Pantalones para Hombres
       { nombre: "Pantalón Negro", url: "productos/ropa/pantalones_para_hombres/pantalon_negro.html" },
       { nombre: "Pantalones de Golf", url: "productos/ropa/pantalones_para_hombres/pantalones_de_golf.html" },
       { nombre: "Pantalones Deportivos Joggers", url: "productos/ropa/pantalones_para_hombres/pantalones_deportivos_joggers.html" },
       { nombre: "Pantalones Jeans", url: "productos/ropa/pantalones_para_hombres/pantalones_jeans.html" },
       { nombre: "Pantalones Joggers", url: "productos/ropa/pantalones_para_hombres/pantalones_joggers.html" },

       //Pantalones para Mujeres
       { nombre: "Leggings de Licra", url: "productos/ropa/pantalones_para_mujeres/leggings.html" },
       { nombre: "Pantalón Acampanado", url: "productos/ropa/pantalones_para_mujeres/pantalon_acampanado.html" },
       { nombre: "Pantalón Casual", url: "productos/ropa/pantalones_para_mujeres/pantalon_casual.html" },
       { nombre: "Pantalón Jean", url: "productos/ropa/pantalones_para_mujeres/pantalon_jean.html" },
       { nombre: "Pantalón Liso Mujer", url: "productos/ropa/pantalones_para_mujeres/pantalon_liso.html" },

       //Pantalones para niños
       { nombre: "Jean para Niños", url: "productos/ropa/pantalones_para_ninos/jean_para_ninos.html" },
       { nombre: "Licra para Niños", url: "productos/ropa/pantalones_para_ninos/licra_para_ninos.html" },
       { nombre: "Pantalón Deportivo", url: "productos/ropa/pantalones_para_ninos/pantalon_deportivo.html" },
       { nombre: "Pantalón Liso", url: "productos/ropa/pantalones_para_ninos/pantalon_liso.html" },
       { nombre: "Pantalones Lisos para Niños", url: "productos/ropa/pantalones_para_ninos/pantalones_lisos.html" },

       //Trajes para Hombres
       { nombre: "Traje 2 Piezas", url: "productos/ropa/trajes_para_hombres/traje_2piezas.html" },
       { nombre: "Traje Azul", url: "productos/ropa/trajes_para_hombres/traje_azul.html" },
       { nombre: "Traje Completo", url: "productos/ropa/trajes_para_hombres/traje_completo.html" },
       { nombre: "Traje Elegante", url: "productos/ropa/trajes_para_hombres/traje_elegante.html" },
       { nombre: "Traje Negro", url: "productos/ropa/trajes_para_hombres/traje_negro.html" },

       //Vestidos
       { nombre: "Vestido Ajustado", url: "productos/ropa/vestidos/vestido_ajustado.html" },
       { nombre: "Vestido de Cuello Cuadrado", url: "productos/ropa/vestidos/vestido_de_cuello_cuadrado.html" },
       { nombre: "Vestido de Invierno", url: "productos/ropa/vestidos/vestido_de_invierno.html" },
       { nombre: "Vestido Elegante", url: "productos/ropa/vestidos/vestido_elegante.html" },
       { nombre: "Vestido Negro", url: "productos/ropa/vestidos/vestido_negro.html" },

       //--Tecnología--//

       //Bocinas
       { nombre: "Bocina Aiwa", url: "productos/tecnologia/bocinas/bocina_Aiwa.html" },
       { nombre: "Bocina LG", url: "productos/tecnologia/bocinas/bocina_lg.html" },
       { nombre: "Bocina Samsung", url: "productos/tecnologia/bocinas/bocina_samsung.html" },
       { nombre: "Bocina Stage", url: "productos/tecnologia/bocinas/bocina_stage.html" },
       { nombre: "Bocina Tecnomaster", url: "productos/tecnologia/bocinas/bocina_tecnomaster.html" },
   
       //Celulares
       { nombre: "Celular Samsung A26", url: "productos/tecnologia/celulares/celular_a26.html" },
       { nombre: "Celular Samsung A35", url: "productos/tecnologia/celulares/celular_a35.html" },
       { nombre: "Celular S24 Ultra", url: "productos/tecnologia/celulares/celular_s24.html" },
       { nombre: "iPhone 14", url: "productos/tecnologia/celulares/iphone_14.html" },
       { nombre: "iPhone 14 Pro", url: "productos/tecnologia/celulares/iphone_14pro.html" },

       //Laptops
       { nombre: "Laptop Asus", url: "productos/tecnologia/laptops/laptop_asus.html" },
       { nombre: "Laptop Dell", url: "productos/tecnologia/laptops/laptop_dell.html" },
       { nombre: "Laptop DragonX", url: "productos/tecnologia/laptops/laptop_dragonx.html" },
       { nombre: "Laptop HP", url: "productos/tecnologia/laptops/laptop_hp.html" },
       { nombre: "Laptop Lenovo", url: "productos/tecnologia/laptops/laptop_lenovo.html" },

       //Tablets
       { nombre: "Tablet Apple", url: "productos/tecnologia/tablets/tablet_apple.html" },
       { nombre: "Tablet RTED", url: "productos/tecnologia/tablets/tablet_rted.html" },
       { nombre: "Tablet Samsung", url: "productos/tecnologia/tablets/tablet_samsung.html" },
       { nombre: "Tablet TCL", url: "productos/tecnologia/tablets/tablet_tcl.html" },
       { nombre: "Tablet Tecnomaster", url: "productos/tecnologia/tablets/tablet_tecnomaster.html" },

       //Televisores
       { nombre: "Televisor LED 50 Pulgadas", url: "productos/tecnologia/televisores/televisor_led_50.html" },
       { nombre: "Televisor LED LG", url: "productos/tecnologia/televisores/televisor_lg.html" },
       { nombre: "Televisor LED Samsung", url: "productos/tecnologia/televisores/televisor_samsung_led.html" },
       { nombre: "Televisor LED Tecnomaster", url: "productos/tecnologia/televisores/televisor_tecnomaster.html" },
       { nombre: "Televisor Samsung 75 pulgadas", url: "productos/tecnologia/televisores/tv_samsung_75.html" },



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
