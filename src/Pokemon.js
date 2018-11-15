class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.types[0].type.name;
    this.sprite = data.sprites.front_default;
  }
}

export default Pokemon;
