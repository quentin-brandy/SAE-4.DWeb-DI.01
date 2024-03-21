<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240321132700 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE film_ala_une (id INT AUTO_INCREMENT NOT NULL, movie_id INT NOT NULL, UNIQUE INDEX UNIQ_8C8574618F93B6FC (movie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE film_ala_une ADD CONSTRAINT FK_8C8574618F93B6FC FOREIGN KEY (movie_id) REFERENCES movie (id)');
        $this->addSql('ALTER TABLE movie ADD short_desc LONGTEXT NOT NULL, ADD long_desc LONGTEXT NOT NULL, ADD catchphrase VARCHAR(200) NOT NULL, ADD release_date DATE NOT NULL, ADD trailer LONGTEXT NOT NULL, ADD vertical_img LONGTEXT NOT NULL, ADD horizontal_img LONGTEXT NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE film_ala_une DROP FOREIGN KEY FK_8C8574618F93B6FC');
        $this->addSql('DROP TABLE film_ala_une');
        $this->addSql('ALTER TABLE movie DROP short_desc, DROP long_desc, DROP catchphrase, DROP release_date, DROP trailer, DROP vertical_img, DROP horizontal_img');
    }
}
