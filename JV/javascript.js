  const preguntaNombre = prompt("Cual es su nombre?");
    alert("Hola " + preguntaNombre + ", Has entrado a la lista de espera para comprar la entrada de lollapaloza 2023 ");
    alert("Valor de la entrada normal: $110(USD)");

    const elegirNumero = parseInt(prompt("Elija el numero de entradas que quiera comprar  *max. 10 por persona*"));
    console.log(preguntaNombre + " a seleccionado " + elegirNumero + " de entradas");
    if ((elegirNumero > 0) && (elegirNumero <= 10)){
        const sumaentradas = (elegirNumero * 110);
        alert("El valor de " + elegirNumero + " entradas, es de: " + sumaentradas + "USD");
        alert("Recordamos que tambien tenemos servicio de Casilleros Valor: $3(USD)");


        const elegirCasilleros = parseInt(prompt("Elija la cantidad de casilleros a comprar "));
        const sumaCasilleros = (elegirCasilleros * 3);
        const sumaTotalEntradas = (sumaentradas + sumaCasilleros);

        alert(preguntaNombre + " El monto total de su compra es de: " + sumaTotalEntradas + "(USD)");
        console.log(preguntaNombre + "  a seleccionado: " + elegirNumero + " de entradas, y " + elegirCasilleros + " cantidad de casilleros para su estadia en el Show.");
        console.log("Esto tiene un valor total de: " + sumaTotalEntradas + "(USD), a cancelar a nombre de: " + preguntaNombre);

        alert("Recordamos que Lollapaloza tiene Areas VIP, para disfrutar de una mejor experiencia. Este Pase tiene un valor de: $85(USD)");
        const paseVip = parseInt(prompt("Si desea agregar el PASE VIP LOLLAPALOZA agrege 1, de lo contrario coloque 0"));
            if (paseVip == 1) {
                const conPaseVip =(sumaTotalEntradas + 85);
                console.log(conPaseVip);
                alert("Al comprar el PASE VIP tienes un descuento de 10% en el total de tu compra...FELICIDADES!");
                console.log(preguntaNombre + " a agregado un PASE VIP a su compra");
                const descuentoVip = (conPaseVip * 0.10);
                const aplicadoDescuentoVip = ( conPaseVip -descuentoVip);

                alert("El total de su compra con descuento PASE VIP 10% es de: " + aplicadoDescuentoVip + "(USD)");
                console.log(preguntaNombre + "El total de su compra sin descuento es de: $ " + sumaTotalEntradas + "(USD) , ademas con el PASE VIP tiene un descuento del 10%, por lo que el total de su compra es de: $" + aplicadoDescuentoVip + "(USD)");
            } else {
            
                alert("El total de su compra es de: " + sumaTotalEntradas + "(USD)");
                console.log(preguntaNombre + "El total de su compra sin descuento es de: $ " + sumaTotalEntradas + "(USD)");
            }
        
        const pedirCorreo = prompt("Ingrese su E-mail para continuar con el pago");
        const tiempoEspera = (203 * 5);
        alert("El tiempo de espera por usuario es de 5 min. " + preguntaNombre + " eres el numero 203 en la Fila...Tiempo a esperar: " + tiempoEspera + " min.");

        alert(preguntaNombre + " Su entrada se enviara a su correo: " + pedirCorreo + " FELICIDADES Y BIENVENIDO A LOLLAPALOZA 2023!!");
        



    } else {    
        alert("El numero elegido no esta dentro del rango, intente nuevamente")
    }