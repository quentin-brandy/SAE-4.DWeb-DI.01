<?php

namespace App\Controller\Admin;

use App\Entity\FilmALaUne;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class FilmALaUneCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return FilmALaUne::class;
    }

  
    public function configureFields(string $pageName): iterable
    {
        return [
          yield AssociationField::new('movie')->setCrudController(MovieCrudController::class)
        ];
    }
  
}
