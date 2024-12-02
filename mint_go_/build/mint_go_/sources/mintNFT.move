module mint_go_::mintNFT;

    // Part 1: These imports are provided by default
    // use sui::object::{Self, UID};
    // use sui::transfer;
    // use sui::tx_context::{Self, TxContext};

    use std::string::{Self, utf8};

    use sui::balance::Balance;
    use sui::coin::{Self, Coin};
    use sui::display;
    use sui::dynamic_object_field as dof;
    use sui::event;
    use sui::package;
    use sui::sui::SUI;
    use sui::table::{Self, Table};
    use sui::url::{Self, Url};

    // This is the only dependency you need for events.
    // Use this dependency to get a type wrapper for UTF-8 strings
    // For publishing NFT
    // For displaying NFT image
    // === Errors ===

    const EInvalidAmount: u64 = 0;
    const EInvalidNft: u64 = 1;
    const EInvalidOwner: u64 = 2;
    const EListingNotFoundForNFTId: u64 = 3;
    const EBidNotFoundForNFTId: u64 = 4;

    // ====== Events ======

    public struct MarketplaceInit has copy, drop {
        object_id: ID,
    }

    public struct NFTMinted has copy, drop {
        object_id: ID,
        creator: address,
        name: string::String,
    }

    public struct ListingCreated has copy, drop {
        object_id: ID,
        nft_id: ID,
        creator: address,
        price: u64,
    }

    public struct ListingCancelled has copy, drop {
        object_id: ID,
        nft_id: ID,
        creator: address,
        price: u64,
    }

    public struct Buy has copy, drop {
        object_id: ID,
        nft_id: ID,
        creator: address,
        buyer: address,
        price: u64,
    }

    public struct BidCreated has copy, drop {
        object_id: ID,
        nft_id: ID,
        creator: address,
        price: u64,
    }

    public struct BidCancelled has copy, drop {
        object_id: ID,
        nft_id: ID,
        creator: address,
        price: u64,
    }

    public struct AcceptBid has copy, drop {
        object_id: ID,
        nft_id: ID,
        creator: address,
        seller: address,
        price: u64,
    }

    // === Structs ===

    public struct TestnetNFT has key, store {
        id: UID,
        characterId:UID,
        characterLevel:u64,
        name: string::String,
        description: string::String,
        url: Url,
        creator: address,
    }

    public struct Listing has key, store {
        id: UID,
        price: u64,
        owner: address,
        nft_id: ID
    }

    public struct Bid has key, store {
        id: UID,
        nft_id: ID,
        balance: Balance<SUI>,
        owner: address,
    }

    public struct Marketplace has key {
        id: UID,
        listings: Table<ID, Listing>,
        bids: Table<ID, vector<Bid>>,
    }

    // For displaying NFT image
    public struct MINTNFT has drop {}

    // Part 3: Module initializer to be executed when this module is published

    fun init(otw: MINTNFT, ctx: &mut TxContext) {
        let keys = vector[
            utf8(b"name"),
            utf8(b"description"),
            utf8(b"url"),
        ];

        let values = vector[
            utf8(b"{name}"),
            utf8(b"{description}"),
            utf8(b"{url}"),
        ];

        // Claim the publisher
        let publisher = package::claim(otw, ctx);

        let mut display = display::new_with_fields<TestnetNFT>(
            &publisher, keys, values, ctx
        );

        display::update_version(&mut display);

        transfer::public_transfer(publisher, ctx.sender());
        transfer::public_transfer(display, ctx.sender());

        let marketplace = Marketplace {
            id: object::new(ctx),
            listings: table::new<ID, Listing>(ctx),
            bids: table::new<ID, vector<Bid>>(ctx),
        };

        event::emit(MarketplaceInit {
            object_id: object::id(&marketplace),
        });

        transfer::share_object(marketplace);
    }


    // === Public-View Functions ===

    /// Get the NFT's `name`
    public fun name(nft: &TestnetNFT): &string::String {
        &nft.name
    }

    /// Get the NFT's `description`
    public fun description(nft: &TestnetNFT): &string::String {
        &nft.description
    }

    /// Get the NFT's `url`
    public fun url(nft: &TestnetNFT): &Url {
        &nft.url
    }

    /// Get the NFT's `creator`
    public fun creator(nft: &TestnetNFT): &address {
        &nft.creator
    }

    // === Entrypoints  ===

    /// Create a new TestnetNFT
public fun mint_to_sender(
    name: vector<u8>,
    description: vector<u8>,
    url: vector<u8>,
    character_id: UID,
    character_level: u64,
    ctx: &mut TxContext
): TestnetNFT {
    let sender = tx_context::sender(ctx);
    let nft = TestnetNFT {
        id: object::new(ctx),
        characterId: character_id,
        characterLevel: character_level,
        name: string::utf8(name),
        description: string::utf8(description),
        url: url::new_unsafe_from_bytes(url),
        creator: sender,
    };

    event::emit(NFTMinted {
        object_id: object::id(&nft),
        creator: sender,
        name: nft.name,
    });

    nft
}


   
  

   

  

  