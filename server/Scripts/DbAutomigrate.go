package scripts

import (
	models "engigrow/models"
	"fmt"
)

func DbAutomigrate() {

	fmt.Println("Running migrations...")
	DB.AutoMigrate(&models.User{},&models.Review{})

}