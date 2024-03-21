<?php

namespace App\Entity;

use App\Repository\MovieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;



#[ORM\Entity(repositoryClass: MovieRepository::class)]
#[Groups(['json_movies' , 'json_movie'])]
class Movie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['json_category'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['json_category'])]
    private ?string $name = null;

    #[ORM\ManyToMany(targetEntity: Category::class, inversedBy: 'movies')]
    private Collection $category;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $short_desc = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $long_desc = null;

    #[ORM\Column(length: 200)]
    private ?string $catchphrase = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $release_date = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $trailer = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $vertical_url = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $horizontal_url = null;

    #[ORM\OneToOne(mappedBy: 'movie', cascade: ['persist', 'remove'])]
    private ?FilmALaUne $film_a_la_une = null;

    public function __construct()
    {
        $this->category = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Category>
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(Category $category): static
    {
        if (!$this->category->contains($category)) {
            $this->category->add($category);
        }

        return $this;
    }

    public function removeCategory(Category $category): static
    {
        $this->category->removeElement($category);

        return $this;
    }

    public function getShortDesc(): ?string
    {
        return $this->short_desc;
    }

    public function setShortDesc(string $short_desc): static
    {
        $this->short_desc = $short_desc;

        return $this;
    }

    public function getLongDesc(): ?string
    {
        return $this->long_desc;
    }

    public function setLongDesc(string $long_desc): static
    {
        $this->long_desc = $long_desc;

        return $this;
    }

    public function getCatchphrase(): ?string
    {
        return $this->catchphrase;
    }

    public function setCatchphrase(string $catchphrase): static
    {
        $this->catchphrase = $catchphrase;

        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->release_date;
    }

    public function setReleaseDate(\DateTimeInterface $release_date): static
    {
        $this->release_date = $release_date;

        return $this;
    }

    public function getTrailer(): ?string
    {
        return $this->trailer;
    }

    public function setTrailer(string $trailer): static
    {
        $this->trailer = $trailer;

        return $this;
    }

    public function getVerticalUrl(): ?string
    {
        return $this->vertical_url;
    }

    public function setVerticalUrl(string $vertical_url): static
    {
        $this->vertical_url = $vertical_url;

        return $this;
    }

    public function getHorizontalUrl(): ?string
    {
        return $this->horizontal_url;
    }

    public function setHorizontalUrl(string $horizontal_url): static
    {
        $this->horizontal_url = $horizontal_url;

        return $this;
    }

    public function getFilmALaUne(): ?FilmALaUne
    {
        return $this->film_a_la_une;
    }

    public function setFilmALaUne(FilmALaUne $film_a_la_une): static
    {
        // set the owning side of the relation if necessary
        if ($film_a_la_une->getMovie() !== $this) {
            $film_a_la_une->setMovie($this);
        }

        $this->film_a_la_une = $film_a_la_une;

        return $this;
    }
}