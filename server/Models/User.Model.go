package models

import (
    "gorm.io/gorm"
    "gorm.io/datatypes"
)

type User struct {
    gorm.Model
    Name            string         `json:"name"`
    Email           string         `gorm:"unique" json:"email"`
    Password        string         `json:"password"`
    Biodata         string         `json:"biodata"`
    Company         string         `json:"company"`
    Interests       datatypes.JSON `json:"interests"`  
    Followers       datatypes.JSON `json:"followers"`  
    Following       datatypes.JSON `json:"following"`  
    ProfilePhotoURL string         `json:"profilePhotoUrl"`
}
