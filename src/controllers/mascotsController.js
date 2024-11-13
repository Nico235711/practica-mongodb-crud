
export class MascotsController {

  // mét. asíncrono porque el back debe esperar una respuesta
  static createMascot = async (req, res) => {
    try {
      res.status(201).json("Esta OK")
    } catch (error) {
      res.status(500).json(error)
      
    }
  }

  static getAllMascots = async (req, res) => {
    try {
      // console.log("Hello mascots");
      
    } catch (error) {
      console.log(error);
      
    }
  }

  static getMascotById = async (req, res) => {
    try {
      
    } catch (error) {
      console.log(error);
      
    }
  }

  static updateMascotById = async (req, res) => {
    try {
      
    } catch (error) {
      console.log(error);
      
    }
  }

  static deleteMascotById = async (req, res) => {
    try {
      
    } catch (error) {
      console.log(error);
      
    }
  }
}