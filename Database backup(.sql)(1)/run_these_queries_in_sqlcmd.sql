
    
    =======
    
    
    CREATE TABLE Loginew (
        id int NOT NULL,
       username varchar(255) NOT NULL,
       password varchar(255) NOT NULL,
        emailid varchar(255) NOT NULL,
        isvoted int ,
        PRIMARY KEY (id)
    );
    
    ===================
    

    ====================
    
    CREATE TABLE partyfinale (
        ID int NOT NULL,
       PartyName varchar(255) NOT NULL,
       PartysymbolPath varchar(255) NOT NULL,
        PartyLeaderName varchar(255) NOT NULL,
        City varchar(255) NOT NULL,
  		 Votes int ,
        PRIMARY KEY (ID)
    );
  