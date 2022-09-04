
inventoryList();


function inventoryList() {
  var op;
  const inventory = {
    nombre: [],
  };

  do {
    op = prompt(
      "**********MENÚ*********" +
        "\n1. Agregar Camisa" +
        "\n2. Agregar Pantalon" +
        "\n3. Obtener lista" +
        "\n4. Elminar producto" +
        "\n5. Salir" +
        "\n**************************"
    );
    if (op == 1) {
      var nombre = prompt("Ingrese una camisa");
      add(nombre);
      console.table(inventory);
    }
    if (op == 2) {
      var nombre = prompt("Ingrese un pantalon");
      add(nombre);
      console.table(inventory);
    }
    if (op == 3) {
      getList();
    }
    if (op == 4) {
      var nombre = prompt("Ingrese un producto");
      inventory.nombre = remove(nombre);
      console.log(inventory);
    }
    if (op == 5) {
      console.log(5);
    }
  } while (op != 5);

  function add(name) {
    let existe = false;
    if (inventory.nombre.length != 0) {
      for (let i = 0; i < inventory.nombre.length; i++) {
        if (name == inventory.nombre[i]) {
          existe = true;
        }
      }
      if (existe) {
        alert("Ya hay un elemento con ese nombre");
      } else {
        inventory.nombre.push(name);
        console.log(inventory.nombre);
      }
    } else {
      inventory.nombre.push(name);
      console.log(inventory.nombre);
    }
  }

  function remove(name) {
    let existe = false;
    let aux = [];
    if (inventory.nombre.length != 0) {
      for (let i = 0; i < inventory.nombre.length; i++) {
        if (name == inventory.nombre[i]) {
          console.log(i);
          aux = inventory.nombre.filter((item) => item !== name);
          inventory.nombre.splice(0, 1);
          console.table(aux);
          existe = true;
        }
      }

      if (existe) {
        return aux;
      } else {
        alert("No se encontro ningun producto para eliminar");
        return inventory.nombre;
      }
    }
  }

  function getList() {
    if (inventory.nombre.length != 0) {
      for (let i = 0; i < inventory.nombre.length; i++) {
        console.log(
          "index " + " Nombre " + "\n  " + i + "      " + inventory.nombre[i]
        );
      }
    }
  }
}
