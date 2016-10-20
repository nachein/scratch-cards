export default class Game
{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
  }

  get revealed()
  {
    return this.seen;
  }

  set revealed(wasSeen)
  {
    this.seen = wasSeen;
  }
}
