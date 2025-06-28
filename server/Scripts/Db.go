package scripts

import (
    "fmt"
    "os"
    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDatabase() (*gorm.DB, error) {

dsn := fmt.Sprintf(
  "host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
  os.Getenv("DB_HOST"),
  os.Getenv("DB_PORT"),
  os.Getenv("DB_USER"),
  os.Getenv("DB_PASSWORD"),
  os.Getenv("DB_NAME"),
)
    Db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        return nil, err
    }

    fmt.Println("🚀 Connected to Postgres DB!")
    DB = Db // Assign to the global variable
    return Db, nil
}