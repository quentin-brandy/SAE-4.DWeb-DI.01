<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240321144408 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE movie ADD vertical_url LONGTEXT NOT NULL, ADD horizontal_url LONGTEXT NOT NULL, DROP vertical_img, DROP horizontal_img');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE movie ADD vertical_img LONGTEXT NOT NULL, ADD horizontal_img LONGTEXT NOT NULL, DROP vertical_url, DROP horizontal_url');
    }
}
